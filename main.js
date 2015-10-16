/*
 * The MIT License (MIT)
 * Copyright (c) 2015 Antonio Carlos Barbosa. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, Mustache */

define(function (require, exports, module) {
    'use strict';

    var AppInit = brackets.getModule('utils/AppInit'),
        EditorManager = brackets.getModule('editor/EditorManager'),
        CodeHintManager = brackets.getModule("editor/CodeHintManager"),
        LanguageManager = brackets.getModule("language/LanguageManager"),
        PreferencesManager = brackets.getModule('preferences/PreferencesManager'),
        Menus = brackets.getModule('command/Menus'),
        CommandManager = brackets.getModule('command/CommandManager'),
        KeyEvent = brackets.getModule('utils/KeyEvent'),
		trackService = require('trackingClient').init(),
        snippets = require('snippet'),
        bsfuncHint = require('text!bs-func.txt'),
        enabled = false,
        prefs = PreferencesManager.getExtensionPrefs('acb-bootstrap-snippets'),

        COMMAND_NAME = 'Enable ACB Bootstrap Snippets',
        COMMAND_ID = 'acbapbox.toggleBootstrapSnippets',
        handleToggleSnippets = function () {
            enabled = !enabled;
            prefs.set('enabled', enabled);
            prefs.save();
            CommandManager.get(COMMAND_ID).setChecked(enabled);
        },
        applyPreferences = function () {
            enabled = prefs.get('enabled');
            CommandManager.get(COMMAND_ID).setChecked(enabled);
        },

        parseLine = function (line, cursorPosition) {
            var words;
            line = line.substring(0, cursorPosition);
            words = line.split(/\W/);
            return words[words.length - 1];
        },

        keyEventHandler = function ($event, editor, event) {
            enabled = prefs.get('enabled');

            var cursorPosition, line, snippetKey, start;

            if (enabled) {
                if ((event.type === 'keydown') && (event.keyCode === KeyEvent.DOM_VK_TAB || event.keyCode === KeyEvent.DOM_VK_DOWN)) {
                    cursorPosition = editor.getCursorPos();
                    line = editor.document.getLine(cursorPosition.line);
                    snippetKey = parseLine(line, cursorPosition.ch);
                    if (snippets[snippetKey]) {
                        start = {
                            line: cursorPosition.line,
                            ch: cursorPosition.ch - snippetKey.length
                        };

                        editor.document.replaceRange(snippets[snippetKey], start, cursorPosition);
                        event.preventDefault();
                    }
                }
            }
        },

        activeEditorChangeHandler = function ($event, focusedEditor, lostEditor) {
            enabled = prefs.get('enabled');
            if (lostEditor) {
                $(lostEditor).off('keyEvent', keyEventHandler);
            }
            if (focusedEditor) {
                $(focusedEditor).on('keyEvent', keyEventHandler);
            }
        };


    var lastLine,
        lastFileName,
        cachedMatches,
        cachedWordList,
        tokenDefinition,
        currentTokenDefinition;

    /**
     * @constructor
     */
    function BShints() {
        this.lastLine = 0;
        this.lastFileName = "";
        this.cachedMatches = [];
        this.cachedWordList = [];
        this.tokenDefinition = /[a-zA-Z][(_a-zA-Z0-9$,.';_ )].{2,}/g;
        this.currentTokenDefinition = /[a-zA-Z][a-zA-Z0-9_]+$/g;
    }

    /**
     *
     * @param {Editor} editor
     * A non-null editor object for the active window.
     *
     * @param {String} implicitChar
     * Either null, if the hinting request was explicit, or a single character
     * that represents the last insertion and that indicates an implicit
     * hinting request.
     *
     * @return {Boolean}
     * Determines whether the current provider is able to provide hints for
     * the given editor context and, in case implicitChar is non- null,
     * whether it is appropriate to do so.
     */
    BShints.prototype.hasHints = function (editor, implicitChar) {
        this.editor = editor;
        var cursor = this.editor.getCursorPos();

        // if it is not the same line as the last input - rebuild word list
        if (cursor.line !== this.lastLine) {
            var rawWordList = bsfuncHint.match(this.tokenDefinition);
            this.cachedWordList = [];
            var i;
            for (i = 0; i < rawWordList.length; i++) {
                var word = rawWordList[i];
                if (this.cachedWordList.indexOf(word) === -1) {
                    this.cachedWordList.push(word);
                }
            }
        }
        this.lastLine = cursor.line;

        // if has entered more than 2 characters - start completion
        var lineBeginning = {
            line: cursor.line,
            ch: 0
        };
        var textBeforeCursor = this.editor.document.getRange(lineBeginning, cursor);
        var symbolBeforeCursorArray = textBeforeCursor.match(this.currentTokenDefinition);
        if (symbolBeforeCursorArray) {
            // find if the half-word inputed is in the list
            var n;
            for (n = 0; n < this.cachedWordList.length; n++) {
                if (this.cachedWordList[n].indexOf(symbolBeforeCursorArray[0]) === 0) {
                    return true;
                }
            }
        }
        return false;
    };

    /**
     * Returns a list of -value hints if possible for the current editor context.
     *
     * @param {Editor} implicitChar
     * Either null, if the hinting request was explicit, or a single character
     * that represents the last insertion and that indicates an implicit
     * hinting request.
     *
     * @return {jQuery.Deferred|{
     *              hints: Array.<string|jQueryObject>,
     *              match: string,
     *              selectInitial: boolean,
     *              handleWideResults: boolean}}
     * Null if the provider wishes to end the hinting session. Otherwise, a
     * response object that provides:
     * 1. a sorted array hints that consists of strings
     * 2. a string match that is used by the manager to emphasize matching
     *    substrings when rendering the hint list
     * 3. a boolean that indicates whether the first result, if one exists,
     *    should be selected by default in the hint list window.
     * 4. handleWideResults, a boolean (or undefined) that indicates whether
     *    to allow result string to stretch width of display.
     */
    BShints.prototype.getHints = function (implicitChar) {
        var cursor = this.editor.getCursorPos();
        var lineBeginning = {
            line: cursor.line,
            ch: 0
        };
        var textBeforeCursor = this.editor.document.getRange(lineBeginning, cursor);
        var symbolBeforeCursorArray = textBeforeCursor.match(this.currentTokenDefinition);
        var hintList = [];
        var j;
        for (j = 0; j < this.cachedWordList.length; j++) {
            if (this.cachedWordList[j].indexOf(symbolBeforeCursorArray[0]) === 0) {
                hintList.push(this.cachedWordList[j]);
            }
        }

        return {
            hints: hintList,
            match: symbolBeforeCursorArray[0],
            selectInitial: true,
            handleWideResults: false
        };
    };

    /**
     * Complete the word
     *
     * @param {String} hint
     * The hint to be inserted into the editor context.
     *
     * @return {Boolean}
     * Indicates whether the manager should follow hint insertion with an
     * additional explicit hint request.
     */

    BShints.prototype.insertHint = function (hint) {
        var cursor = this.editor.getCursorPos();
        var lineBeginning = {
            line: cursor.line,
            ch: 0
        };
        var textBeforeCursor = this.editor.document.getRange(lineBeginning, cursor);
        var indexOfTheSymbol = textBeforeCursor.search(this.currentTokenDefinition);
        var replaceStart = {
            line: cursor.line,
            ch: indexOfTheSymbol
        };
        // hint = hint + '\t';
        this.editor.document.replaceRange(hint, replaceStart, cursor);

        var cursorPosition = this.editor.getCursorPos();
        var line = this.editor.document.getLine(cursorPosition.line);
        var snippetKey = parseLine(line, cursorPosition.ch);
        if (snippets[snippetKey]) {
            var start = {
                line: cursorPosition.line,
                ch: cursorPosition.ch - snippetKey.length
            };

            this.editor.document.replaceRange(snippets[snippetKey], start, cursorPosition);
            event.preventDefault();
        }

        return false;
    };

    AppInit.appReady(function () {
        enabled = prefs.get('enabled');

        CommandManager.register(COMMAND_NAME, COMMAND_ID, handleToggleSnippets);
        Menus.getMenu(Menus.AppMenuBar.EDIT_MENU).addMenuItem(COMMAND_ID);

        var currentEditor = EditorManager.getCurrentFullEditor();
        $(currentEditor).on('keyEvent', keyEventHandler);
        $(EditorManager).on('activeEditorChange', activeEditorChangeHandler);

        var bsHints = new BShints();
        CodeHintManager.registerHintProvider(bsHints, ["all"], 0);

        prefs.on('change', applyPreferences);
        applyPreferences();
    });
});
