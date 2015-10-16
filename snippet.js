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
/*global define, brackets, window */

define(function (require, exports, module) {
    'use strict';

    var snippets = {};
    var cdncss = '    <link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">\n';
    var cdnjs = '    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>\n' +
        '    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>\n';


    // Bootstrap 3 - Minimum Template

    snippets.bs3html = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="utf-8">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        cdncss +
        '\n' +
        '    <title>Minimum Bootstrap HTML Skeleton</title>\n<!--  -->\n<style>\n\n</style>\n\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '\n' +
        cdnjs +
        '\n<script>\n\n</script>\n' +
        '</body>\n' +
        '</html>\n';

    snippets.bs3 = '<!doctype html>\n' +
        '\n' +
        '<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->\n' +
        '<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->\n' +
        '<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->\n' +
        '<!--[if gt IE 8]><!-->\n' +
        '<html class="no-js" lang="">\n' +
        '<!--<![endif]-->\n' +
        '\n' +
        '<head>\n' +
        '    <meta charset="utf-8">\n' +
        '    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
        '    <title>[INSERT SITE TITLE HERE]</title>\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        '    <meta name="description" content="[ENTER SITE DESCRIPTION HERE]">\n' +
        '    <meta name="author" content="[ENTER AUTHOR INFO HERE]">\n' +
        '\n' +
        '    <link rel="apple-touch-icon" href="[INSERT apple-tuch-icon.png]">\n' +
        '    <style>\n' +
        '        body {\n' +
        '            padding-top: 50px;\n' +
        '            padding-bottom: 20px;\n' +
        '        }\n' +
        '    </style>\n' +
        cdncss +
        '\n' +
        '    <! -- WE ASSUME YOU ARE USING A main.css FOR CSS CUSTOMIZATION -->\n' +
        '    <!-- link rel="stylesheet" href="./css/main.css"> -->\n' +
        '    <! -- DOWNLOAD LAST VERSION IN http://modernizr.com/ -->\n' +
        '    <!-- script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script> -->\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '\n' +
        '    <!--[if IE]>\n' +
        '        <script src="https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>\n' +
        '        <script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>\n' +
        '    <![endif]-->\n' +
        '\n' +
        '    <!-- Start coding here -->\n' +
        '\n' +
        '\n' +
        '    <!-- Coding End -->\n' +
        '\n' +
        cdnjs +
        '</body>\n' +
        '\n' +
        '</html>\n';

    snippets.bs3template = snippets.bs3html;

    // Alerts

    snippets.bs3alertdanger = '<div class="alert alert-danger">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '	<strong>INSERT TITLE HERE</strong>INSERT BODY HERE\n' +
        '</div>\n';

    snippets.bs3alertinfo = '<div class="alert alert-info">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '	<strong>INSERT TITLE HERE</strong> INSERT BODY HERE\n' +
        '</div>\n';

    snippets.bs3alertsuccess = '<div class="alert alert-success">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '<strong>INSERT TITLE HERE</strong> INSERT BODY HERE\n' +
        '</div>\n';

    snippets.bs3alertwarning = '<div class="alert alert-warning">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '<strong>INSERT TITLE HERE</strong> INSERT BODY HERE\n' +
        '</div>\n';

    snippets.bs3alert = '<div class="alert">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '<strong>INSERT TITLE HERE</strong> INSERT BODY HERE\n' +
        '</div>\n';

    // Badge

    snippets.bs3badge = '<span class="badge">INSERT BADGE HERE</span>';

    // Breadcrumbs

    snippets.bs3breadcrumbs = '<ol class="breadcrumb">\n' +
        '<li>\n' +
        '   <a href="#">[Home]</a>\n' +
        '</li>\n' +
        '<li>\n' +
        '   <a href="#">[About]</a>\n' +
        '</li>}\n' +
        '<li class="active">[Contact]</li>\n' +
        '</ol>\n';
    // Buttons

    snippets.bs3blockbuttondanger = '<button type="button" class="btn btn-large btn-block btn-danger">[button]</button>\n';
    snippets.bs3blockbuttondefault = '<button type="button" class="btn btn-large btn-block btn-default">[button]</button>\n';
    snippets.bs3blockbuttondisabled = '<button type="button" class="btn btn-large btn-block btn-{2:default} disabled">[button]</button>\n';
    snippets.bs3blockbuttoninfo = '<a class="btn btn-large btn-block btn-info" href="#" role="button">[button]</a>\n';
    snippets.bs3blockbuttonprimary = '<button type="button" class="btn btn-large btn-block btn-primary">[button]</button>\n';
    snippets.bs3blockbuttonsuccess = '<a class="btn btn-large btn-block btn-success" href="#" role="button">[button]</a>\n';
    snippets.bs3blockbuttonwarning = '<a class="btn btn-large btn-block btn-warning" href="#" role="button">[button]</a>\n';
    snippets.bs3blockbutton = '<button type="button" class="btn btn-large btn-block btn-default">[button]</button>\n';
    snippets.bs3buttondanger = '<button type="button" class="btn btn-danger">[button]</button>\n';
    snippets.bs3buttondefault = '<button type="button" class="btn btn-default">[button]</button>\n';
    snippets.bs3buttondisabled = '<button type="button" class="btn btn-primary disabled">[button]</button>\n';
    snippets.bs3buttongroupvertical = '<div class="btn-group-vertical">\n' +
        '	<button type="button" class="btn btn-default">[Top]</button>\n' +
        '	<button type="button" class="btn btn-default">[Middle]</button>\n' +
        '   <button type="button" class="btn btn-default">[Bottom]</button>\n' +
        '</div>\n';
    snippets.bs3buttongroup = '<div class="btn-group">\n' +
        '	<button type="button" class="btn btn-default">[Left]</button>\n' +
        '	<button type="button" class="btn btn-default">[Middle]</button>\n' +
        '	<button type="button" class="btn btn-default">[Right]</button>\n' +
        '</div>';
    snippets.bs3buttoninfo = '<button type="button" class="btn btn-info">[button]</button>';
    snippets.bs3buttonprimary = '<button type="button" class="btn btn-primary">[button]</button>';
    snippets.bs3buttonsuccess = '<button type="button" class="btn btn-success">[button]</button>';
    snippets.bs3buttontoolbar = '<div class="btn-toolbar">\n' +
        '	<div class="btn-group"></div>\n' +
        '	<div class="btn-group"></div>\n' +
        '	<div class="btn-group"></div>\n' +
        '</div>';
    snippets.bs3buttonwarning = '<button type="button" class="btn btn-warning">[button]</button>\n';
    snippets.bs3button = '<button type="button" class="btn btn-default">[button]</button>\n';
    snippets.bs3lgbuttondanger = '<button type="button" class="btn btn-danger">[button]</button>\n';
    snippets.bs3lgbuttondisabled = '<button type="button" class="btn btn-lg btn-default disabled">[button]</button>\n';
    snippets.bs3lgbuttoninfo = '<a class="btn btn-lg btn-info" href="#" role="button">button</a>\n';
    snippets.bs3lgbuttonprimary = '<button type="button" class="btn btn-lg btn-primary">[button]</button>\n';
    snippets.bs3lgbuttonsuccess = '<button type="button" class="btn btn-lg btn-success">[button]</button>\n';
    snippets.bs3lgbuttonwarning = '<a class="btn btn-lg btn-warning" href="#" role="button">button</a>\n';
    snippets.bs3lgbutton = '<button type="button" class="btn btn-lg btn-default">[button]</button>\n';
    snippets.bs3lgbuttondefault = '<button type="button" class="btn btn-lg btn-default">[button]</button>\n';
    snippets.bs3minibuttondanger = '<button type="button" class="btn btn-xs btn-danger">[button]</button>\n';
    snippets.bs3minibuttondefault = '<button type="button" class="btn btn-xs btn-default">[button]</button>\n';
    snippets.bs3minibuttondisabled = '<button type="button" class="btn btn-xs btn-default">[button]</button>\n';
    snippets.bs3minibuttoninfo = '<button type="button" class="btn btn-xs btn-info">[button]</button>\n';
    snippets.bs3minibuttonprimary = '<button type="button" class="btn btn-xs btn-primary">[button]</button>\n';
    snippets.bs3minibuttonsuccess = '<button type="button" class="btn btn-xs btn-success">[button]</button>\n';
    snippets.bs3minibuttonwarning = '<button type="button" class="btn btn-xs btn-warning">[button]</button>\n';
    snippets.bs3minibutton = '<button type="button" class="btn btn-xs btn-default">[button]</button>\n';
    snippets.bs3smbuttondanger = '<button type="button" class="btn btn-sm btn-danger">[button]</button>\n';
    snippets.bs3smbuttondefault = '<button type="button" class="btn btn-sm btn-default">[button]</button>\n';
    snippets.bs3smbuttondisabled = '<button type="button" class="btn btn-sm btn-default disabled">[button]</button>\n';
    snippets.bs3smbuttoninfo = '<button type="button" class="btn btn-sm btn-info">[button]</button>\n';
    snippets.bs3smbuttonprimary = '<button type="button" class="btn btn-sm btn-primary">[button]</button>\n';
    snippets.bs3smbuttonsuccess = '<button type="button" class="btn btn-sm btn-success">[button]</button>\n';
    snippets.bs3smbuttonwarning = '<button type="button" class="btn btn-sm btn-warning">[button]</button>\n';
    snippets.bs3smbutton = '<button type="button" class="btn btn-sm btn-default">[button]</button>\n';

    // Carousel

    // Sample Images
    //
    // https://pixabay.com/static/uploads/photo/2015/06/15/06/17/flowers-809927_640.jpg
    // https://pixabay.com/static/uploads/photo/2014/02/10/16/07/tulips-263513_640.jpg
    // https://pixabay.com/static/uploads/photo/2014/04/10/10/00/tulip-320774_640.jpg
    //

    snippets.bs3carousel = '    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n' +
        '        <ol class="carousel-indicators">\n' +
        '            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"> </li>\n' +
        '            <li data-target="#carousel-example-generic" data-slide-to="1"> </li>\n' +
        '            <li data-target="#carousel-example-generic" data-slide-to="2"> </li>\n' +
        '        </ol>\n' +
        '        <div class="carousel-inner">\n' +
        '            <div class="item active">\n' +
        '                <img src="[INSERT IMAGE HERE]" alt="First slide"/>\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="[INSERT IMAGE HERE]" alt="Second slide"/>\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="[INSERT IMAGE HERE]" alt="Third slide"/>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>\n' +
        '        <a class="right carousel-control" href="#carousel-example-generic" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>\n' +
        '    </div>\n';

    // CDN

    snippets.bs3cdn = cdncss + cdnjs;

    snippets.bs3cdnjs = cdnjs;

    snippets.bs3cdncss = cdncss;

    snippets.bs3cdnmodernizr = '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js">\n';

    snippets.bs3cdndatatablecss = '<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.9/css/jquery.dataTables.min.css">';

    snippets.bs3cdndatatablejs = '<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>';

    snippets.bs3cdnjasnycss = '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/css/jasny-bootstrap.css">';

    snippets.bs3cdnjasnyjs = '<script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js"></script>';

    snippets.bs3cdncsvimportjs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.71/jquery.csv-0.71.min.js"></script>';


    // Clearfix

    snippets.bs3clearfix = '<div class="clearfix">\n\n' +
        '</div>\n';

    // Forms

    snippets.bs3formhorizontal = '<form action="" method="POST" class="form-horizontal" role="form">\n' +
        '		<div class="form-group">\n' +
        '			<legend>[Form title]</legend>\n' +
        '		</div>\n\n\n\n' +
        '		<div class="form-group">\n' +
        '			<div class="col-sm-10 col-sm-offset-2">\n' +
        '				<button type="submit" class="btn btn-primary">Submit</button>\n' +
        '			</div>\n' +
        '		</div>\n' +
        '</form>\n';

    snippets.bs3forminline = '<form action="" method="POST" class="form-inline" role="form">\n\n' +
        '	<div class="form-group">\n' +
        '		<label class="sr-only" for="">label</label>\n' +
        '		<input type="email" class="form-control" id="" placeholder="Input field">\n' +
        '	</div>\n\n\n' +
        '	<button type="submit" class="btn btn-primary">Submit</button>\n' +
        '</form>\n';

    snippets.bs3formlabel = '<label for="input-id" class="col-sm-2">[label]</label>\n';

    snippets.bs3form = '<form action="" method="POST" role="form">\n' +
        '	<legend>Form title</legend>\n\n' +
        '	<div class="form-group">\n' +
        '		<label for="">label</label>\n' +
        '		<input type="text" class="form-control" id="" placeholder="Input field">\n' +
        '	</div>\n\n\n\n' +
        '	<button type="submit" class="btn btn-primary">Submit</button>\n' +
        '</form>\n';

    snippets.bs3inputcheckbox = '<div class="checkbox">\n' +
        '	<label>\n' +
        '		<input type="checkbox" value="">\n' +
        '		Checkbox\n' +
        '	</label>\n' +
        '</div>\n';

    snippets.bs3inputcolorh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="color" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputcolor = '<input type="color" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs3inputdateh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="date" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputdate = '<input type="date" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs3inputemailh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="email" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputemail = '<input type="email" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs3inputhidden = '<input type="hidden" name="" id="input" class="form-control" value="">\n';

    snippets.bs3inputlabel = '<label for="input-id" class="col-sm-2"></label>\n';

    snippets.bs3inputmonthh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="month" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputmonth = '<input type="month" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs3inputnumberh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="number" name="" id="input" class="form-control" value="min="{6" min="{6"} max="" step="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputnumber = '<input type="number" name="" id="input" class="form-control" value="" min="[MIN]" max="[MAX]" step="" required="required" title="">\n';

    snippets.bs3inputpasswordh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="password" name="" id="input" class="form-control" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputpassword = '<input type="password" name="" id="input" class="form-control" required="required" title="">\n';

    snippets.bs3inputradio = '<div class="radio">\n' +
        '	<label>\n' +
        '		<input type="radio" name="" id="input" value="" checked="checked">\n' +
        '		Radio Box\n' +
        '	</label>\n' +
        '</div>\n';

    snippets.bs3inputrangeh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="range" name="" id="input" class="form-control" value="min="{6" min="{6"} max="" step="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputrange = '<input type="range" name="" id="input" class="form-control" value="" min="{5"} max="" step="" required="required" title="">\n';

    snippets.bs3inputreseth = '<div class="form-group">\n' +
        '	<div class="col-sm-10 col-offset-2">\n' +
        '		<input type="reset" value="Reset" class="btn btn-default">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputreset = '<input type="reset" value="Reset" class="btn btn-default">\n';

    snippets.bs3inputsearchh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="search" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputsearch = '<input type="search" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs3inputselecth = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<select name="" id="input" class="form-control">\n' +
        '			<option value="">-- Select One --</option>\n' +
        '		</select>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputselect = '<select name="" id="input" class="form-control">\n' +
        '	    <option value="">-- Select One --</option>\n' +
        '</select>\n';

    snippets.bs3inputsubmith = '<div class="form-group">\n' +
        '	<div class="col-sm-10 col-offset-2">\n' +
        '		<button type="submit" class="btn btn-primary">Submit</button>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputsubmit = '<button type="submit" class="btn btn-primary">Submit</button>\n';

    snippets.bs3inputtelh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="tel" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputtel = '<input type="tel" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs3inputtexth = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputtext = '<input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="">\n';

    snippets.bs3inputtimeh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="time" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputtime = '<input type="time" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs3inputurlh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="url" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputurl = '<input type="url" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs3inputweekh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="week" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3inputweek = '<input type="week" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs3selecth = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-2">\n' +
        '		<select name="" id="input" class="form-control" required="required">\n' +
        '			<option value=""></option>\n' +
        '		</select>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3select = '<select name="" id="input" class="form-control" required="required">\n' +
        '      <option value=""></option>\n' +
        '</select>\n';

    snippets.bs3textareah = '<div class="form-group">\n' +
        '	<label for="textarea" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<textarea name="" id="textarea" class="form-control" rows="3" required="required"></textarea>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3textarea = '<textarea name="" id="input" class="form-control" rows="3" required="required"></textarea>\n';

    // Grid System

    snippets.bs3col1 = '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">\n\n</div>\n';

    snippets.bs3col10 = '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">\n\n</div>\n';

    snippets.bs3col11 = '<div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">\n\n</div>\n';

    snippets.bs3col12 = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n\n</div>\n';

    snippets.bs3col2 = '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">\n\n</div>\n';

    snippets.bs3col3 = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n\n</div>\n';

    snippets.bs3col4 = '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">\n\n</div>\n';

    snippets.bs3col5 = '<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">\n\n</div>\n';

    snippets.bs3col6 = '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">\n\n</div>\n';

    snippets.bs3col7 = '<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">\n\n</div>\n';

    snippets.bs3col8 = '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">\n\n</div>\n';

    snippets.bs3col9 = '<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">\n\n<div>\n';

    snippets.bs3container = '<div class="container">\n</div>\n';

    snippets.bs3rowcol = '<div class="row">\n' +
        '	<div class="col-xs- col-sm- col-md- col-lg-">\n' +
        '		\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3row = '<div class="row">\n\n</div>\n';

    // Work with columns

    snippets.bs3col3equal = ' <div class="row">\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '</div>\n';

    snippets.bs3col3unequal = ' <div class="row">\n' +
        '  <div class="col-sm-3">.col-md-3</div>\n' +
        '  <div class="col-sm-6">.col-md-6</div>\n' +
        '  <div class="col-sm-3">.col-md-3</div>\n' +
        '</div>\n';

    snippets.bs3col2equal = '<div class="row">\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '  <div class="col-sm-8">.col-sm-8</div>\n' +
        '</div>\n';

    snippets.bs3col2nested = '<div class="row">\n' +
        '  <div class="col-sm-8">' +
        '    .col-sm-8' +
        '    <div class="row">' +
        '      <div class="col-sm-6">.col-sm-6</div>' +
        '      <div class="col-sm-6">.col-sm-6</div>' +
        '    </div>' +
        '  </div>' +
        '  <div class="col-sm-4">.col-sm-4</div>' +
        '</div>\n';

    snippets.bs3colmobdesk = '<div class="row">\n' +
        '  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '</div>\n' +
        '<div class="row">\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '</div>\n' +
        '<div class="row">\n' +
        '  <div class="col-xs-6">.col-xs-6</div>\n' +
        '  <div class="col-xs-6">.col-xs-6</div>\n' +
        '</div>\n';

    snippets.bs3colmobtabdesk = ' <div class="row">\n' +
        '  <div class="col-xs-12 col-sm-6 col-lg-8">.col-xs-12 .col-sm-6 .col-lg-8</div>\n' +
        '  <div class="col-xs-6 col-lg-4">.col-xs-6 .col-lg-4</div>\n' +
        '</div>\n' +
        '<div class="row">\n' +
        '  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n' +
        '  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n' +
        '  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n' +
        '</div>\n';

    snippets.bs3clearfloats = ' <div class="row">\n' +
        '  <div class="col-xs-6 col-sm-3">\n' +
        '    Column 1\n' +
        '    <br>\n' +
        '    Resize the browser window to see the effect.\n' +
        '  </div>\n' +
        '  <div class="col-xs-6 col-sm-3">Column 2</div>\n' +
        '  <!-- Add clearfix for only the required viewport -->\n' +
        '  <div class="clearfix visible-xs"></div>\n' +
        '  <div class="col-xs-6 col-sm-3">Column 3</div>\n' +
        '  <div class="col-xs-6 col-sm-3">Column 4</div>\n' +
        '</div>\n';

    snippets.bs3offsettingcol = ' <div class="row">\n' +
        '  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>\n' +
        '  <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">\n' +
        '  .col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>\n' +
        '</div>\n';

    snippets.bs3pushandpullcol = ' <div class="row">\n' +
        '  <div class="col-sm-4 col-sm-push-8">.col-sm-4 .col-sm-push-8</div>\n' +
        '  <div class="col-sm-8 col-sm-pull-4">.col-sm-8 .col-sm-pull-4</div>\n' +
        '</div>\n';

    // Icons

    snippets.bs3iconglyphicon = '<span class="glyphicon glyphicon-[ENTER NAME HERE]" aria-hidden="true"></span>\n';

    snippets.bs3iconsample = '<!--  <!DOCTYPE html>\n' +
        '<html>\n' +
        '<head>\n' +
        snippets.bs3cdncss + '\n' +
        '<style>\n' +
        'i.tiny {font-size: 1em;}\n' +
        'i.small {font-size: 2em;}\n' +
        'i.medium {font-size: 4em;}\n' +
        'i.large {font-size: 6em; color: red;}\n' +
        '</style>\n' +
        '</head>\n' +
        '<body>\n' +
        '\n' +
        '<i class="glyphicon glyphicon-cloud tiny"></i>\n' +
        '<i class="glyphicon glyphicon-cloud small"></i>\n' +
        '<i class="glyphicon glyphicon-cloud medium"></i>\n' +
        '<i class="glyphicon glyphicon-cloud large"></i>\n' +
        '\n' +
        '</body>\n' +
        '</html>\n -->';

    snippets.bs3icon = '<i class="fa fa-[name-shape-o-direction]"></i>';

    snippets.bs3iconasterisk = '<span class="glyphicon glyphicon-asterisk"></span>\n';
    snippets.bs3iconplus = '<span class="glyphicon glyphicon-plus"></span>\n';
    snippets.bs3iconminus = '<span class="glyphicon glyphicon-minus"></span>\n';
    snippets.bs3iconeuro = '<span class="glyphicon glyphicon-euro"></span>\n';
    snippets.bs3iconcloud = '<span class="glyphicon glyphicon-cloud"></span>\n';
    snippets.bs3iconenvelope = '<span class="glyphicon glyphicon-envelope"></span>\n';
    snippets.bs3iconpencil = '<span class="glyphicon glyphicon-pencil"></span>\n';
    snippets.bs3iconglass = '<span class="glyphicon glyphicon-glass"></span>\n';
    snippets.bs3iconmusic = '<span class="glyphicon glyphicon-music"></span>\n';
    snippets.bs3iconsearch = '<span class="glyphicon glyphicon-search"></span>\n';
    snippets.bs3iconheart = '<span class="glyphicon glyphicon-heart"></span>\n';
    snippets.bs3iconstar = '<span class="glyphicon glyphicon-star"></span>\n';
    snippets.bs3iconstarempty = '<span class="glyphicon glyphicon-star-empty"></span>\n';
    snippets.bs3iconuser = '<span class="glyphicon glyphicon-user"></span>\n';
    snippets.bs3iconfilm = '<span class="glyphicon glyphicon-film"></span>\n';
    snippets.bs3iconthlarge = '<span class="glyphicon glyphicon-th-large"></span>\n';
    snippets.bs3iconth = '<span class="glyphicon glyphicon-th"></span>\n';
    snippets.bs3iconthlist = '<span class="glyphicon glyphicon-th-list"></span>\n';
    snippets.bs3iconok = '<span class="glyphicon glyphicon-ok"></span>\n';
    snippets.bs3iconremove = '<span class="glyphicon glyphicon-remove"></span>\n';
    snippets.bs3iconzoomin = '<span class="glyphicon glyphicon-zoom-in"></span>\n';
    snippets.bs3iconzoomout = '<span class="glyphicon glyphicon-zoom-out"></span>\n';
    snippets.bs3iconoff = '<span class="glyphicon glyphicon-off"></span>\n';
    snippets.bs3iconsignal = '<span class="glyphicon glyphicon-signal"></span>\n';
    snippets.bs3iconcog = '<span class="glyphicon glyphicon-cog"></span>\n';
    snippets.bs3icontrash = '<span class="glyphicon glyphicon-trash"></span>\n';
    snippets.bs3iconhome = '<span class="glyphicon glyphicon-home"></span>\n';
    snippets.bs3iconfile = '<span class="glyphicon glyphicon-file"></span>\n';
    snippets.bs3icontime = '<span class="glyphicon glyphicon-time"></span>\n';
    snippets.bs3iconroad = '<span class="glyphicon glyphicon-road"></span>\n';
    snippets.bs3icondownloadalt = '<span class="glyphicon glyphicon-download-alt"></span>\n';
    snippets.bs3icondownload = '<span class="glyphicon glyphicon-download"></span>\n';
    snippets.bs3iconupload = '<span class="glyphicon glyphicon-upload"></span>\n';
    snippets.bs3iconinbox = '<span class="glyphicon glyphicon-inbox"></span>\n';
    snippets.bs3iconplaycircle = '<span class="glyphicon glyphicon-play-circle"></span>\n';
    snippets.bs3iconrepeat = '<span class="glyphicon glyphicon-repeat"></span>\n';
    snippets.bs3iconrefresh = '<span class="glyphicon glyphicon-refresh"></span>\n';
    snippets.bs3iconlistalt = '<span class="glyphicon glyphicon-list-alt"></span>\n';
    snippets.bs3iconlock = '<span class="glyphicon glyphicon-lock"></span>\n';
    snippets.bs3iconflag = '<span class="glyphicon glyphicon-flag"></span>\n';
    snippets.bs3iconheadphones = '<span class="glyphicon glyphicon-headphones"></span>\n';
    snippets.bs3iconvolumeoff = '<span class="glyphicon glyphicon-volume-off"></span>\n';
    snippets.bs3iconvolumedown = '<span class="glyphicon glyphicon-volume-down"></span>\n';
    snippets.bs3iconvolumeup = '<span class="glyphicon glyphicon-volume-up"></span>\n';
    snippets.bs3iconqrcode = '<span class="glyphicon glyphicon-qrcode"></span>\n';
    snippets.bs3iconbarcode = '<span class="glyphicon glyphicon-barcode"></span>\n';
    snippets.bs3icontag = '<span class="glyphicon glyphicon-tag"></span>\n';
    snippets.bs3icontags = '<span class="glyphicon glyphicon-tags"></span>\n';
    snippets.bs3iconbook = '<span class="glyphicon glyphicon-book"></span>\n';
    snippets.bs3iconbookmark = '<span class="glyphicon glyphicon-bookmark"></span>\n';
    snippets.bs3iconprint = '<span class="glyphicon glyphicon-print"></span>\n';
    snippets.bs3iconcamera = '<span class="glyphicon glyphicon-camera"></span>\n';
    snippets.bs3iconfont = '<span class="glyphicon glyphicon-font"></span>\n';
    snippets.bs3iconbold = '<span class="glyphicon glyphicon-bold"></span>\n';
    snippets.bs3iconitalic = '<span class="glyphicon glyphicon-italic"></span>\n';
    snippets.bs3icontextheight = '<span class="glyphicon glyphicon-text-height"></span>\n';
    snippets.bs3icontextwidth = '<span class="glyphicon glyphicon-text-width"></span>\n';
    snippets.bs3iconalignleft = '<span class="glyphicon glyphicon-align-left"></span>\n';
    snippets.bs3iconaligncenter = '<span class="glyphicon glyphicon-align-center"></span>\n';
    snippets.bs3iconalignright = '<span class="glyphicon glyphicon-align-right"></span>\n';
    snippets.bs3iconalignjustify = '<span class="glyphicon glyphicon-align-justify"></span>\n';
    snippets.bs3iconlist = '<span class="glyphicon glyphicon-list"></span>\n';
    snippets.bs3iconindentleft = '<span class="glyphicon glyphicon-indent-left"></span>\n';
    snippets.bs3iconindentright = '<span class="glyphicon glyphicon-indent-right"></span>\n';
    snippets.bs3iconfacetimevideo = '<span class="glyphicon glyphicon-facetime-video"></span>\n';
    snippets.bs3iconpicture = '<span class="glyphicon glyphicon-picture"></span>\n';
    snippets.bs3iconmapmarker = '<span class="glyphicon glyphicon-map-marker"></span>\n';
    snippets.bs3iconadjust = '<span class="glyphicon glyphicon-adjust"></span>\n';
    snippets.bs3icontint = '<span class="glyphicon glyphicon-tint"></span>\n';
    snippets.bs3iconedit = '<span class="glyphicon glyphicon-edit"></span>\n';
    snippets.bs3iconshare = '<span class="glyphicon glyphicon-share"></span>\n';
    snippets.bs3iconcheck = '<span class="glyphicon glyphicon-check"></span>\n';
    snippets.bs3iconmove = '<span class="glyphicon glyphicon-move"></span>\n';
    snippets.bs3iconstepbackward = '<span class="glyphicon glyphicon-step-backward"></span>\n';
    snippets.bs3iconfastbackward = '<span class="glyphicon glyphicon-fast-backward"></span>\n';
    snippets.bs3iconbackward = '<span class="glyphicon glyphicon-backward"></span>\n';
    snippets.bs3iconplay = '<span class="glyphicon glyphicon-play"></span>\n';
    snippets.bs3iconpause = '<span class="glyphicon glyphicon-pause"></span>\n';
    snippets.bs3iconstop = '<span class="glyphicon glyphicon-stop"></span>\n';
    snippets.bs3iconforward = '<span class="glyphicon glyphicon-forward"></span>\n';
    snippets.bs3iconfastforward = '<span class="glyphicon glyphicon-fast-forward"></span>\n';
    snippets.bs3iconstepforward = '<span class="glyphicon glyphicon-step-forward"></span>\n';
    snippets.bs3iconeject = '<span class="glyphicon glyphicon-eject"></span>\n';
    snippets.bs3iconchevronleft = '<span class="glyphicon glyphicon-chevron-left"></span>\n';
    snippets.bs3iconchevronright = '<span class="glyphicon glyphicon-chevron-right"></span>\n';
    snippets.bs3iconplussign = '<span class="glyphicon glyphicon-plus-sign"></span>\n';
    snippets.bs3iconminussign = '<span class="glyphicon glyphicon-minus-sign"></span>\n';
    snippets.bs3iconremovesign = '<span class="glyphicon glyphicon-remove-sign"></span>\n';
    snippets.bs3iconoksign = '<span class="glyphicon glyphicon-ok-sign"></span>\n';
    snippets.bs3iconquestionsign = '<span class="glyphicon glyphicon-question-sign"></span>\n';
    snippets.bs3iconinfosign = '<span class="glyphicon glyphicon-info-sign"></span>\n';
    snippets.bs3iconscreenshot = '<span class="glyphicon glyphicon-screenshot"></span>\n';
    snippets.bs3iconremovecircle = '<span class="glyphicon glyphicon-remove-circle"></span>\n';
    snippets.bs3iconokcircle = '<span class="glyphicon glyphicon-ok-circle"></span>\n';
    snippets.bs3iconbancircle = '<span class="glyphicon glyphicon-ban-circle"></span>\n';
    snippets.bs3iconarrowleft = '<span class="glyphicon glyphicon-arrow-left"></span>\n';
    snippets.bs3iconarrowright = '<span class="glyphicon glyphicon-arrow-right"></span>\n';
    snippets.bs3iconarrowup = '<span class="glyphicon glyphicon-arrow-up"></span>\n';
    snippets.bs3iconarrowdown = '<span class="glyphicon glyphicon-arrow-down"></span>\n';
    snippets.bs3iconsharealt = '<span class="glyphicon glyphicon-share-alt"></span>\n';
    snippets.bs3iconresizefull = '<span class="glyphicon glyphicon-resize-full"></span>\n';
    snippets.bs3iconresizesmall = '<span class="glyphicon glyphicon-resize-small"></span>\n';
    snippets.bs3iconexclamationsign = '<span class="glyphicon glyphicon-exclamation-sign"></span>\n';
    snippets.bs3icongift = '<span class="glyphicon glyphicon-gift"></span>\n';
    snippets.bs3iconleaf = '<span class="glyphicon glyphicon-leaf"></span>\n';
    snippets.bs3iconfire = '<span class="glyphicon glyphicon-fire"></span>\n';
    snippets.bs3iconeyeopen = '<span class="glyphicon glyphicon-eye-open"></span>\n';
    snippets.bs3iconeyeclose = '<span class="glyphicon glyphicon-eye-close"></span>\n';
    snippets.bs3iconwarningsign = '<span class="glyphicon glyphicon-warning-sign"></span>\n';
    snippets.bs3iconplane = '<span class="glyphicon glyphicon-plane"></span>\n';
    snippets.bs3iconcalendar = '<span class="glyphicon glyphicon-calendar"></span>\n';
    snippets.bs3iconrandom = '<span class="glyphicon glyphicon-random"></span>\n';
    snippets.bs3iconcomment = '<span class="glyphicon glyphicon-comment"></span>\n';
    snippets.bs3iconmagnet = '<span class="glyphicon glyphicon-magnet"></span>\n';
    snippets.bs3iconchevronup = '<span class="glyphicon glyphicon-chevron-up"></span>\n';
    snippets.bs3iconchevrondown = '<span class="glyphicon glyphicon-chevron-down"></span>\n';
    snippets.bs3iconretweet = '<span class="glyphicon glyphicon-retweet"></span>\n';
    snippets.bs3iconshoppingcart = '<span class="glyphicon glyphicon-shopping-cart"></span>\n';
    snippets.bs3iconfolderclose = '<span class="glyphicon glyphicon-folder-close"></span>\n';
    snippets.bs3iconfolderopen = '<span class="glyphicon glyphicon-folder-open"></span>\n';
    snippets.bs3iconresizevertical = '<span class="glyphicon glyphicon-resize-vertical"></span>\n';
    snippets.bs3iconresizehorizontal = '<span class="glyphicon glyphicon-resize-horizontal"></span>\n';
    snippets.bs3iconhdd = '<span class="glyphicon glyphicon-hdd"></span>\n';
    snippets.bs3iconbullhorn = '<span class="glyphicon glyphicon-bullhorn"></span>\n';
    snippets.bs3iconbell = '<span class="glyphicon glyphicon-bell"></span>\n';
    snippets.bs3iconcertificate = '<span class="glyphicon glyphicon-certificate"></span>\n';
    snippets.bs3iconthumbsup = '<span class="glyphicon glyphicon-thumbs-up"></span>\n';
    snippets.bs3iconthumbsdown = '<span class="glyphicon glyphicon-thumbs-down"></span>\n';
    snippets.bs3iconhandright = '<span class="glyphicon glyphicon-hand-right"></span>\n';
    snippets.bs3iconhandleft = '<span class="glyphicon glyphicon-hand-left"></span>\n';
    snippets.bs3iconhandup = '<span class="glyphicon glyphicon-hand-up"></span>\n';
    snippets.bs3iconhanddown = '<span class="glyphicon glyphicon-hand-down"></span>\n';
    snippets.bs3iconcirclearrowright = '<span class="glyphicon glyphicon-circle-arrow-right"></span>\n';
    snippets.bs3iconcirclearrowleft = '<span class="glyphicon glyphicon-circle-arrow-left"></span>\n';
    snippets.bs3iconcirclearrowup = '<span class="glyphicon glyphicon-circle-arrow-up"></span>\n';
    snippets.bs3iconcirclearrowdown = '<span class="glyphicon glyphicon-circle-arrow-down"></span>\n';
    snippets.bs3iconglobe = '<span class="glyphicon glyphicon-globe"></span>\n';
    snippets.bs3iconwrench = '<span class="glyphicon glyphicon-wrench"></span>\n';
    snippets.bs3icontasks = '<span class="glyphicon glyphicon-tasks"></span>\n';
    snippets.bs3iconfilter = '<span class="glyphicon glyphicon-filter"></span>\n';
    snippets.bs3iconbriefcase = '<span class="glyphicon glyphicon-briefcase"></span>\n';
    snippets.bs3iconfullscreen = '<span class="glyphicon glyphicon-fullscreen"></span>\n';
    snippets.bs3icondashboard = '<span class="glyphicon glyphicon-dashboard"></span>\n';
    snippets.bs3iconpaperclip = '<span class="glyphicon glyphicon-paperclip"></span>\n';
    snippets.bs3iconheartempty = '<span class="glyphicon glyphicon-heart-empty"></span>\n';
    snippets.bs3iconlink = '<span class="glyphicon glyphicon-link"></span>\n';
    snippets.bs3iconphone = '<span class="glyphicon glyphicon-phone"></span>\n';
    snippets.bs3iconpushpin = '<span class="glyphicon glyphicon-pushpin"></span>\n';
    snippets.bs3iconusd = '<span class="glyphicon glyphicon-usd"></span>\n';
    snippets.bs3icongbp = '<span class="glyphicon glyphicon-gbp"></span>\n';
    snippets.bs3iconsort = '<span class="glyphicon glyphicon-sort"></span>\n';
    snippets.bs3iconsortbyalphabet = '<span class="glyphicon glyphicon-sort-by-alphabet"></span>\n';
    snippets.bs3iconsortbyalphabetalt = '<span class="glyphicon glyphicon-sort-by-alphabet-alt"></span>\n';
    snippets.bs3iconsortbyorder = '<span class="glyphicon glyphicon-sort-by-order"></span>\n';
    snippets.bs3iconsortbyorderalt = '<span class="glyphicon glyphicon-sort-by-order-alt"></span>\n';
    snippets.bs3iconsortbyattributes = '<span class="glyphicon glyphicon-sort-by-attributes"></span>\n';
    snippets.bs3iconsortbyattributesalt = '<span class="glyphicon glyphicon-sort-by-attributes-alt"></span>\n';
    snippets.bs3iconunchecked = '<span class="glyphicon glyphicon-unchecked"></span>\n';
    snippets.bs3iconexpand = '<span class="glyphicon glyphicon-expand"></span>\n';
    snippets.bs3iconcollapsedown = '<span class="glyphicon glyphicon-collapse-down"></span>\n';
    snippets.bs3iconcollapseup = '<span class="glyphicon glyphicon-collapse-up"></span>\n';
    snippets.bs3iconlogin = '<span class="glyphicon glyphicon-log-in"></span>\n';
    snippets.bs3iconflash = '<span class="glyphicon glyphicon-flash"></span>\n';
    snippets.bs3iconlogout = '<span class="glyphicon glyphicon-log-out"></span>\n';
    snippets.bs3iconnewwindow = '<span class="glyphicon glyphicon-new-window"></span>\n';
    snippets.bs3iconrecord = '<span class="glyphicon glyphicon-record"></span>\n';
    snippets.bs3iconsave = '<span class="glyphicon glyphicon-save"></span>\n';
    snippets.bs3iconopen = '<span class="glyphicon glyphicon-open"></span>\n';
    snippets.bs3iconsaved = '<span class="glyphicon glyphicon-saved"></span>\n';
    snippets.bs3iconimport = '<span class="glyphicon glyphicon-import"></span>\n';
    snippets.bs3iconexport = '<span class="glyphicon glyphicon-export"></span>\n';
    snippets.bs3iconsend = '<span class="glyphicon glyphicon-send"></span>\n';
    snippets.bs3iconfloppydisk = '<span class="glyphicon glyphicon-floppy-disk"></span>\n';
    snippets.bs3iconfloppysaved = '<span class="glyphicon glyphicon-floppy-saved"></span>\n';
    snippets.bs3iconfloppyremove = '<span class="glyphicon glyphicon-floppy-remove"></span>\n';
    snippets.bs3iconfloppysave = '<span class="glyphicon glyphicon-floppy-save"></span>\n';
    snippets.bs3iconfloppyopen = '<span class="glyphicon glyphicon-floppy-open"></span>\n';
    snippets.bs3iconcreditcard = '<span class="glyphicon glyphicon-credit-card"></span>\n';
    snippets.bs3icontransfer = '<span class="glyphicon glyphicon-transfer"></span>\n';
    snippets.bs3iconcutlery = '<span class="glyphicon glyphicon-cutlery"></span>\n';
    snippets.bs3iconheader = '<span class="glyphicon glyphicon-header"></span>\n';
    snippets.bs3iconcompressed = '<span class="glyphicon glyphicon-compressed"></span>\n';
    snippets.bs3iconearphone = '<span class="glyphicon glyphicon-earphone"></span>\n';
    snippets.bs3iconphonealt = '<span class="glyphicon glyphicon-phone-alt"></span>\n';
    snippets.bs3icontower = '<span class="glyphicon glyphicon-tower"></span>\n';
    snippets.bs3iconstats = '<span class="glyphicon glyphicon-stats"></span>\n';
    snippets.bs3iconsdvideo = '<span class="glyphicon glyphicon-sd-video"></span>\n';
    snippets.bs3iconhdvideo = '<span class="glyphicon glyphicon-hd-video"></span>\n';
    snippets.bs3iconsubtitles = '<span class="glyphicon glyphicon-subtitles"></span>\n';
    snippets.bs3iconsoundstereo = '<span class="glyphicon glyphicon-sound-stereo"></span>\n';
    snippets.bs3iconsounddolby = '<span class="glyphicon glyphicon-sound-dolby"></span>\n';
    snippets.bs3iconsound51 = '<span class="glyphicon glyphicon-sound-5-1"></span>\n';
    snippets.bs3iconsound61 = '<span class="glyphicon glyphicon-sound-6-1"></span>\n';
    snippets.bs3iconsound71 = '<span class="glyphicon glyphicon-sound-7-1"></span>\n';
    snippets.bs3iconcopyrightmark = '<span class="glyphicon glyphicon-copyright-mark"></span>\n';
    snippets.bs3iconregistrationmark = '<span class="glyphicon glyphicon-registration-mark"></span>\n';
    snippets.bs3iconclouddownload = '<span class="glyphicon glyphicon-cloud-download"></span>\n';
    snippets.bs3iconcloudupload = '<span class="glyphicon glyphicon-cloud-upload"></span>\n';
    snippets.bs3icontreeconifer = '<span class="glyphicon glyphicon-tree-conifer"></span>\n';
    snippets.bs3icontreedeciduous = '<span class="glyphicon glyphicon-tree-deciduous"></span>\n';

    // Images

    snippets.bs3image = '<img src="#" class="img-responsive" alt="Image">\n';

    snippets.bs3thumbnailcontent = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n' +
        '	<div class="thumbnail">\n' +
        '		<img data-src="#" alt="">\n' +
        '		<div class="caption">\n' +
        '			<h3>Title</h3>\n' +
        '			<p>\n' +
        '				...\n' +
        '			</p>\n' +
        '			<p>\n' +
        '				<a href="#" class="btn btn-primary">Action</a>\n' +
        '				<a href="#" class="btn btn-default">Action</a>\n' +
        '			</p>\n' +
        '		</div>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs3thumbnail = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n' +
        '	<a href="#" class="thumbnail">\n' +
        '		<img data-src="#" alt="">\n' +
        '	</a>\n' +
        '</div>\n';

    snippets.bs3imagerounded = '<img src="[ENTER IMAGE HERE]" class="img-rounded" alt="Cinque Terre" width="304" height="236">\n';

    snippets.bs3imagecircle = '<img src="[ENTER IMAGE HERE]" class="img-circle" alt="Cinque Terre" width="304" height="236">\n';

    snippets.bs3imagethumbnail = '<img src="[ENTER IMAGE HERE]" class="img-thumbnail" alt="Cinque Terre" width="304" height="236">\n';

    snippets.bs3imageresponsive = '<img class="img-responsive" src="[ENTER IMAGE HERE]" alt="Chania">\n';

    snippets.bs3thumbnailgallerysample = '<!--\n' +
        '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '  <title>Bootstrap Image Gallery Sample</title>\n' +
        '  <meta charset="utf-8">\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        cdncss + cdnjs +
        '</head>\n' +
        '<body>\n' +
        '\n' +
        '<div class="container">\n' +
        '  <h2>Image Gallery using Thumbnail Class</h2>\n' +
        '\n' +
        '  <div class="row">\n' +
        '    <div class="col-md-4">\n' +
        '      <a href="[ENTER IMAGE HERE]" class="thumbnail">\n' +
        '        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>    \n' +
        '        <img src="[ENTER IMAGE HERE]" alt="" style="width:150px;height:150px">\n' +
        '      </a>\n' +
        '    </div>\n' +
        '    <div class="col-md-4">\n' +
        '      <a href="[ENTER IMAGE HERE]" class="thumbnail">\n' +
        '        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>\n' +
        '        <img src="[ENTER IMAGE HERE]" alt="" style="width:150px;height:150px">\n' +
        '      </a>\n' +
        '    </div>\n' +
        '    <div class="col-md-4">\n' +
        '      <a href="[ENTER IMAGE HERE]" class="thumbnail">\n' +
        '        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>      \n' +
        '        <img src="[ENTER IMAGE HERE]" alt="" style="width:150px;height:150px">\n' +
        '      </a>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n' +
        '</body>\n' +
        '</html>\n' +
        '-->\n';

    snippets.bs3responsiveembed16by9 = '  <div class="embed-responsive embed-responsive-16by9">\n' +
        '    <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/[YOUTUBE VIDEO ID]"></iframe>\n' +
        '  </div>\n';

    snippets.bs3responsiveembed4by3 = '  <div class="embed-responsive embed-responsive-16by9">\n' +
        '    <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/[YOUTUBE VIDEO ID]"></iframe>\n' +
        '  </div>\n';

    // Input Groups

    snippets.bs3inputgroupaddontext = '<div class="input-group">\n' +
        '	<div class="input-group-addon">$</div>\n' +
        '	<input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">\n' +
        '</div>\n';

    snippets.bs3inputgroupaddon = '<div class="input-group-addon">[CHANGE HERE]</div>\n';

    snippets.bs3inputgroupbtn = '<span class="input-group-btn">\n' +
        '	<button type="button" class="btn btn-default">Go!</button>\n' +
        '</span>\n';

    snippets.bs3inputgrouptextbtn = '\n';

    snippets.bs3inputgroup = '<div class="input-group">\n' +
        '	<input type="text" class="form-control" id="exampleInputAmount" placeholder="Search">\n' +
        '	<span class="input-group-btn">\n' +
        '		<button type="button" class="btn btn-default">Go!</button>\n' +
        '	</span>\n' +
        '</div>\n';

    // Jumbotron

    snippets.bs3jumbotron = '<div class="jumbotron">\n' +
        '	<div class="container">\n' +
        '		<h1>[PUT TITLE HERE]</h1>\n' +
        '		<p>[INSERT CONTENT HERE ...]</p>\n' +
        '		<p>\n' +
        '			<a class="btn btn-primary btn-lg">Learn more</a>\n' +
        '		</p>\n' +
        '	</div>\n' +
        '</div>\n';

    // Labels

    snippets.bs3labeldanger = '<span class="label label-danger">[Label]</span>\n';

    snippets.bs3labeldefault = '<span class="label label-default">[Label]</span>\n';

    snippets.bs3labelinfo = '<span class="label label-info">[Label]</span>\n';

    snippets.bs3labelsuccess = '<span class="label label-success">[Label]</span>\n';

    snippets.bs3labelwarning = '<span class="label label-warning">[Label]</span>\n';

    snippets.bs3label = '<span class="label label-[ENTER NAME HERE]">[Label]</span>\n';

    // Link Buttons

    snippets.bs3blocklinkbuttondanger = '<a class="btn btn-large btn-block btn-danger" href="#" role="button">button</a>\n';

    snippets.bs3blocklinkbuttondefault = '<a class="btn btn-large btn-block btn-default" href="#" role="button">button</a>\n';

    snippets.bs3blocklinkbuttondisabled = '<a class="btn btn-large btn-block btn-default disabled" href="#" role="button">button</a>\n';

    snippets.bs3blocklinkbuttoninfo = '<a class="btn btn-large btn-block btn-info" href="#" role="button">button</a>\n';

    snippets.bs3blocklinkbuttonprimary = '<a class="btn btn-large btn-block btn-primary" href="#" role="button">button</a>\n';

    snippets.bs3blocklinkbuttonsuccess = '<a class="btn btn-large btn-block btn-success" href="#" role="button">button</a>\n';

    snippets.bs3blocklinkbuttonwarning = '<a class="btn btn-large btn-block btn-warning" href="#" role="button">button</a>\n';

    snippets.bs3blocklinkbutton = '<a class="btn btn-large btn-block btn-default" href="#" role="button">button</a>\n';

    snippets.bs3lglinkbuttondanger = '<a class="btn btn-lg btn-danger" href="#" role="button">button</a>\n';

    snippets.bs3lglinkbuttondefault = '<a class="btn btn-lg btn-default" href="#" role="button">button</a>\n';

    snippets.bs3lglinkbuttondisabled = '<a class="btn btn-lg btn-default disabled" href="#" role="button">button</a>\n';

    snippets.bs3lglinkbuttoninfo = '<a class="btn btn-lg btn-info" href="#" role="button">button</a>\n';

    snippets.bs3lglinkbuttonprimary = '<a class="btn btn-lg btn-primary" href="#" role="button">button</a>\n';

    snippets.bs3lglinkbuttonsuccess = '<a class="btn btn-lg btn-success" href="#" role="button">button</a>\n';

    snippets.bs3lglinkbuttonwarning = '<a class="btn btn-lg btn-warning" href="#" role="button">button</a>\n';

    snippets.bs3lglinkbutton = '<a class="btn btn-lg btn-default" href="#" role="button">button</a>\n';

    snippets.bs3linkbuttondanger = '<a class="btn btn-danger" href="#" role="button">button</a>\n';

    snippets.bs3linkbuttondefault = '<a class="btn btn-default" href="#" role="button">button</a>\n';

    snippets.bs3linkbuttondisabled = '<a class="btn btn-primary disabled" href="#" role="button">button</a>\n';

    snippets.bs3linkbuttongroupvertical = '<div class="btn-group-vertical">\n' +
        '	<a class="btn btn-default" href="#" role="button">Top</a>\n' +
        '	<a class="btn btn-default" href="#" role="button">Middle</a>\n' +
        '	<a class="btn btn-default" href="#" role="button">Bottom</a>\n' +
        '</div>\n';

    snippets.bs3linkbuttongroup = '<div class="btn-group">\n' +
        '	<a class="btn btn-default" href="#" role="button">Left</a>\n' +
        '	<a class="btn btn-default" href="#" role="button">Middle</a>\n' +
        '	<a class="btn btn-default" href="#" role="button">Right</a>\n' +
        '</div>\n';

    snippets.bs3linkbuttoninfo = '<a class="btn btn-info" href="#" role="button">button</a>\n';

    snippets.bs3linkbuttonprimary = '<a class="btn btn-primary" href="#" role="button">button</a>\n';

    snippets.bs3linkbuttonsuccess = '<a class="btn btn-success" href="#" role="button">button</a>\n';

    snippets.bs3linkbuttonwarning = '<a class="btn btn-warning" href="#" role="button">button</a>\n';

    snippets.bs3linkbutton = '<a class="btn btn-default" href="#" role="button">button</a>\n';

    snippets.bs3minilinkbuttondanger = '<a class="btn btn-xs btn-danger" href="#" role="button">button</a>\n';

    snippets.bs3minilinkbuttondefault = '<a class="btn btn-xs btn-default" href="#" role="button">button</a>\n';

    snippets.bs3minilinkbuttondisabled = '<a class="btn btn-xs btn-default disabled" href="#" role="button">button</a>\n';

    snippets.bs3minilinkbuttoninfo = '<a class="btn btn-xs btn-info" href="#" role="button">button</a>\n';

    snippets.bs3minilinkbuttonprimary = '<button type="button" class="btn btn-xs btn-primary">button</button>\n';

    snippets.bs3minilinkbuttonsuccess = '<a class="btn btn-xs btn-success" href="#" role="button">button</a>\n';

    snippets.bs3minilinkbuttonwarning = '<a class="btn btn-xs btn-warning" href="#" role="button">button</a>\n';

    snippets.bs3minilinkbutton = '<a class="btn btn-xs btn-default" href="#" role="button">button</a>\n';

    snippets.bs3smlinkbuttondanger = '<button type="button" class="btn btn-sm btn-danger">button</button>\n';

    snippets.bs3smlinkbuttondefault = '<button type="button" class="btn btn-sm btn-default">button</button>\n';

    snippets.bs3smlinkbuttondisabled = '<a class="btn btn-sm btn-default disabled" href="#" role="button">button</a>\n';

    snippets.bs3smlinkbuttoninfo = '<button type="button" class="btn btn-sm btn-info">button</button>\n';

    snippets.bs3smlinkbuttonprimary = '<a class="btn btn-sm btn-primary" href="#" role="button">button</a>\n';

    snippets.bs3smlinkbuttonsuccess = '<a class="btn btn-sm btn-success" href="#" role="button">button</a>\n';

    snippets.bs3smlinkbuttonwarning = '<a class="btn btn-sm btn-warning" href="#" role="button">button</a>\n';

    snippets.bs3smlinkbutton = '<a class="btn btn-sm btn-default" href="#" role="button">button</a>\n';

    // List Groups

    snippets.bs3listgroupbadges = '<ul class="list-group">\n' +
        '	<li class="list-group-item">\n' +
        '		<span class="badge">5</span>\n' +
        '		Item 1\n' +
        '	</li>\n' +
        '	<li class="list-group-item">\n' +
        '		<span class="badge">10</span>\n' +
        '		Item 2\n' +
        '	</li>\n' +
        '	<li class="list-group-item">\n' +
        '		<span class="badge">15</span>\n' +
        '		Item 3\n' +
        '	</li>\n' +
        '</ul>\n';

    snippets.bs3listgroupcontent = '<div class="list-group">\n' +
        '	<a href="#" class="list-group-item active">' +
        '		<h4 class="list-group-item-heading">List group item heading</h4>' +
        '		<p class="list-group-item-text">Content goes here</p>' +
        '	</a>' +
        '</div>\n';

    snippets.bs3listgrouplinked = '<div class="list-group">\n' +
        '	<a href="#" class="list-group-item active">Item 1</a>\n' +
        '	<a href="#" class="list-group-item">Item 2</a>\n' +
        '	<a href="#" class="list-group-item">Item 3</a>\n' +
        '</div>\n';

    snippets.bs3listgroup = '<ul class="list-group">\n' +
        '	<li class="list-group-item">Item 1</li>\n' +
        '	<li class="list-group-item">Item 2</li>\n' +
        '	<li class="list-group-item">Item 3</li>\n' +
        '</ul>\n';


    // Local

    snippets.bs3local = '<link rel="stylesheet" media="screen" href="bootstrap.min.css">\n' +
        '<script src="jquery.js"></script>\n' +
        '<script src="bootstrap.min.js"></script>\n';

    snippets.bs3localcss = '<link rel="stylesheet" media="screen" href="bootstrap.min.css">\n';

    snippets.bs3localjs = '<script src="jquery.js"></script>\n' +
        '<script src="bootstrap.min.js"></script>\n';


    // Media

    snippets.bs3mediaobject = '<div class="media">\n' +
        '	<a class="pull-left" href="#">\n' +
        '		<img class="media-object" src="#" alt="Image">\n' +
        '	</a>\n' +
        '	<div class="media-body">\n' +
        '		<h4 class="media-heading">Media heading</h4>\n' +
        '		<p>Text goes here...</p>\n' +
        '	</div>\n' +
        '</div>\n';

    // Modal

    snippets.bs3modal = '<!-- Local bootstrap CSS & JS -->\n' +
        '<link rel="stylesheet" media="screen" href="bootstrap.min.css">' +
        '<script src="jquery.js"></script>' +
        '<script src="bootstrap.min.js"></script>\n';

    snippets.bs3modalstruct = '<!-- Local bootstrap CSS & JS -->\n' +
        '<link rel="stylesheet" media="screen" href="./css/bootstrap.min.css">' +
        '<script src="./js/jquery.js"></script>' +
        '<script src="./js/bootstrap.min.js"></script>\n';

    // Navigation

    snippets.bs3navbarbasic = '<div class="navbar">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</div>\n';

    snippets.bs3navbarbrand = '<a class="navbar-brand" href="/">Title</a>\n';

    snippets.bs3navbarfixedbottom = '<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</nav>\n';

    snippets.bs3navbarfixedtop = '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</nav>\n';

    snippets.bs3navbarform = '<form class="navbar-form pull-right">\n' +
        '	<input type="text" style="width: 200px;">\n' +
        '	<button type="submit" class="btn btn-default">Submit</button>\n' +
        '</form>\n';

    snippets.bs3navbarinverse = '<nav class="navbar navbar-inverse">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</nav>\n';

    snippets.bs3navbarlink = '<p class="navbar-text pull-right">\n' +
        '	<a href="#" class="navbar-link">Links</a>\n' +
        '</p>\n';

    snippets.bs3navbarlinks = '<ul class="nav navbar-nav">\n' +
        '	<li class="active">\n' +
        '		<a href="#">Home</a>\n' +
        '	</li>\n' +
        '	<li>\n' +
        '		<a href="#">Link</a>\n' +
        '	</li>\n' +
        '</ul>\n';

    snippets.bs3navbarresponsive = '<nav class="navbar navbar-default" role="navigation">\n' +
        '	<!-- Brand and toggle get grouped for better mobile display -->\n' +
        '	<div class="navbar-header">\n' +
        '		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n' +
        '			<span class="sr-only">Toggle navigation</span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '		</button>\n' +
        '		<a class="navbar-brand" href="#">Title</a>\n' +
        '	</div>\n' +
        '\n' +
        '	<!-- Collect the nav links, forms, and other content for toggling -->\n' +
        '	<div class="collapse navbar-collapse navbar-ex1-collapse">\n' +
        '		<ul class="nav navbar-nav">\n' +
        '			<li class="active"><a href="#">Link</a></li>\n' +
        '			<li><a href="#">Link</a></li>\n' +
        '		</ul>\n' +
        '		<form class="navbar-form navbar-left" role="search">\n' +
        '			<div class="form-group">\n' +
        '				<input type="text" class="form-control" placeholder="Search">\n' +
        '			</div>\n' +
        '			<button type="submit" class="btn btn-default">Submit</button>\n' +
        '		</form>\n' +
        '		<ul class="nav navbar-nav navbar-right">\n' +
        '			<li><a href="#">Link</a></li>\n' +
        '			<li class="dropdown">\n' +
        '				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\n' +
        '				<ul class="dropdown-menu">\n' +
        '					<li><a href="#">Action</a></li>\n' +
        '					<li><a href="#">Another action</a></li>\n' +
        '					<li><a href="#">Something else here</a></li>\n' +
        '					<li><a href="#">Separated link</a></li>\n' +
        '				</ul>\n' +
        '			</li>\n' +
        '		</ul>\n' +
        '	</div><!-- /.navbar-collapse -->\n' +
        '</nav>\n';

    snippets.bs3navbarstatictop = '<nav class="navbar navbar-default navbar-static-top" role="navigation">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</nav>\n';

    snippets.bs3navbartext = '<p class="navbar-text">[Navbar text]</p>\n';

    snippets.bs3navbar = '<nav class="navbar navbar-default" role="navigation">\n' +
        '	<!-- Brand and toggle get grouped for better mobile display -->\n' +
        '	<div class="navbar-header">\n' +
        '		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n' +
        '			<span class="sr-only">Toggle navigation</span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '		</button>\n' +
        '		<a class="navbar-brand" href="#">Title</a>\n' +
        '	</div>\n' +
        '\n' +
        '	<!-- Collect the nav links, forms, and other content for toggling -->\n' +
        '	<div class="collapse navbar-collapse navbar-ex1-collapse">\n' +
        '		<ul class="nav navbar-nav">\n' +
        '			<li class="active"><a href="#">Link</a></li>\n' +
        '			<li><a href="#">Link</a></li>\n' +
        '		</ul>\n' +
        '		<form class="navbar-form navbar-left" role="search">\n' +
        '			<div class="form-group">\n' +
        '				<input type="text" class="form-control" placeholder="Search">\n' +
        '			</div>\n' +
        '			<button type="submit" class="btn btn-default">Submit</button>\n' +
        '		</form>\n' +
        '		<ul class="nav navbar-nav navbar-right">\n' +
        '			<li><a href="#">Link</a></li>\n' +
        '			<li class="dropdown">\n' +
        '				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\n' +
        '				<ul class="dropdown-menu">\n' +
        '					<li><a href="#">Action</a></li>\n' +
        '					<li><a href="#">Another action</a></li>\n' +
        '					<li><a href="#">Something else here</a></li>\n' +
        '					<li><a href="#">Separated link</a></li>\n' +
        '				</ul>\n' +
        '			</li>\n' +
        '		</ul>\n' +
        '	</div><!-- /.navbar-collapse -->\n' +
        '</nav>\n';

    // Page Header

    snippets.bs3pageheader = '<div class="page-header">\n' +
        '  <h1>title<small>subtext</small></h1>\n' +
        '</div>\n';

    // Pagination

    snippets.bs3pageraligned = '<ul class="pager">\n' +
        '	<li class="previous"><a href="#">&larr; Older</a></li>\n' +
        '	<li class="next"><a href="#">Newer &rarr;</a></li>\n' +
        '</ul>\n';

    snippets.bs3pager = '<ul class="pager">\n' +
        '	<li><a href="#">Previous</a></li>\n' +
        '	<li><a href="#">Next</a></li>\n' +
        '</ul>\n';

    snippets.bs3paginationlarge = '<ul class="pagination pagination-lg">\n' +
        '	<li><a href="#">&laquo;</a></li>\n' +
        '	<li><a href="#">1</a></li>\n' +
        '	<li><a href="#">2</a></li>\n' +
        '	<li><a href="#">3</a></li>\n' +
        '	<li><a href="#">4</a></li>\n' +
        '	<li><a href="#">5</a></li>\n' +
        '	<li><a href="#">&raquo;</a></li>\n' +
        '</ul>\n';

    snippets.bs3paginationsmall = '<ul class="pagination pagination-sm">\n' +
        '	<li><a href="#">&laquo;</a></li>\n' +
        '	<li><a href="#">1</a></li>\n' +
        '	<li><a href="#">2</a></li>\n' +
        '	<li><a href="#">3</a></li>\n' +
        '	<li><a href="#">4</a></li>\n' +
        '	<li><a href="#">5</a></li>\n' +
        '	<li><a href="#">&raquo;</a></li>\n' +
        '</ul>\n';

    snippets.bs3pagination = '<ul class="pagination">\n' +
        '	<li><a href="#">&laquo;</a></li>\n' +
        '	<li><a href="#">1</a></li>\n' +
        '	<li><a href="#">2</a></li>\n' +
        '	<li><a href="#">3</a></li>\n' +
        '	<li><a href="#">4</a></li>\n' +
        '	<li><a href="#">5</a></li>\n' +
        '	<li><a href="#">&raquo;</a></li>\n' +
        '</ul>\n';

    // Panels

    snippets.bs3paneldanger = '<div class="panel panel-danger">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs3panelfooter = '<div class="panel panel-default">\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '	  <div class="panel-footer">\n' +
        '			Panel footer\n' +
        '		</div>\n' +
        '</div>\n';

    snippets.bs3panelheading = '<div class="panel panel-default">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs3panelinfo = '<div class="panel panel-info">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs3panelprimary = '<div class="panel panel-primary">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs3panelsuccess = '<div class="panel panel-success">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs3paneltable = '<div class="panel panel-default">\n' +
        '	<!-- Default panel contents -->\n' +
        '	<div class="panel-heading">Panel heading</div>\n' +
        '		<div class="panel-body">\n' +
        '			<p>Text goes here...</p>\n' +
        '		</div>\n' +
        '\n' +
        '		<!-- Table -->\n' +
        '		<table class="table">\n' +
        '			<thead>\n' +
        '				<tr>\n' +
        '					<th>Heading 1</th>\n' +
        '				</tr>\n' +
        '				<tr>\n' +
        '					<th>Heading 2</th>\n' +
        '				</tr>\n' +
        '			</thead>\n' +
        '			<tbody>\n' +
        '				<tr>\n' +
        '					<td>Content 1</td>\n' +
        '				</tr>\n' +
        '				<tr>\n' +
        '					<td>Content 2</td>\n' +
        '				</tr>\n' +
        '			</tbody>\n' +
        '		</table>\n' +
        '</div>\n';

    snippets.bs3panelwarning = '<div class="panel panel-warning">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs3panel = '<div class="panel panel-default">\n' +
        '	<div class="panel-body">\n' +
        '	   Basic panel example\n' +
        '	</div>\n' +
        '</div>\n';


    // Table

    snippets.bs3table = '<table class="table">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3tablehover = '<table class="table table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3tablehovercolor = '        .table-hover tbody tr:hover td,\n' +
        '        .table-hover tbody tr:hover th {\n' +
        '            background-color: #acb;\n' +
        '        }\n';


    snippets.bs3tablebordered = '    <table class="table table-bordered">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3tableborderedcolor = '        .table {\n' +
        '            border: 2.5px solid red;\n' +
        '        }\n' +
        '        \n' +
        '        .table-bordered > thead > tr > th,\n' +
        '        .table-bordered > tbody > tr > th,\n' +
        '        .table-bordered > tfoot > tr > th,\n' +
        '        .table-bordered > thead > tr > td,\n' +
        '        .table-bordered > tbody > tr > td,\n' +
        '        .table-bordered > tfoot > tr > td {\n' +
        '            border: 2.5px solid red;\n' +
        '        }\n';


    snippets.bs3addroundpanelsolid = '<div class="panel panel-default addroundsolid">\n\n' +
        '</div>\n';

    snippets.bs3addroundsolid = '        .addroundsolid {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 2px solid #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs3addroundpaneldashed = '<div class="panel panel-default addrounddashed">\n\n' +
        '</div>\n';

    snippets.bs3addrounddashed = '        .addrounddashed {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 2px dashed #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs3addroundpaneldotted = '<div class="panel panel-default addrounddotted">\n\n' +
        '</div>\n';

    snippets.bs3addrounddotted = '        .addrounddotted {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 2px dotted #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs3addroundpaneldouble = '<div class="panel panel-default addrounddouble">\n\n' +
        '</div>\n';

    snippets.bs3addrounddouble = '        .addrounddouble {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px double #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs3addroundpanelgroove = '<div class="panel panel-default addroundgroove">\n\n' +
        '</div>\n';

    snippets.bs3addroundgroove = '        .addroundgroove {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px groove #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs3addroundpanelridge = '<div class="panel panel-default addroundridge">\n\n' +
        '</div>\n';

    snippets.bs3addroundridge = '        .addroundridge {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px ridge #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs3addroundpanelinset = '<div class="panel panel-default addroundinset">\n\n' +
        '</div>\n';

    snippets.bs3addroundinset = '        .addroundinset {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px inset #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs3addroundpaneloutset = '<div class="panel panel-default addroundoutset">\n\n' +
        '</div>\n';

    snippets.bs3addroundoutset = '        .addroundoutset {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px outset #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs3addroundpanelhidden = '<div class="panel panel-default addroundhidden">\n\n' +
        '</div>\n';

    snippets.bs3addroundhidden = '        .addroundhidden {\n' +
        '            border: 0px hidden #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';


    snippets.bs3tableborderedhcolor = '        .table-bordered > thead > tr > th,\n' +
        '        .table-bordered > tbody > tr > th,\n' +
        '        .table-bordered > tfoot > tr > th,\n' +
        '        .table-bordered > thead > tr > td,\n' +
        '        .table-bordered > tbody > tr > td,\n' +
        '        .table-bordered > tfoot > tr > td {\n' +
        '            border: 1px solid red;\n' +
        '            border-right-width: 0px;\n' +
        '            border-left-width: 0px;\n' +
        '        }\n';

    snippets.bs3tableborderedhover = '<table class="table table-bordered table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3tablecondensed = '<table class="table table-condensed">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3tablecondensedhover = '<table class="table table-condensed table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';


    snippets.bs3tableresponsive = '<div class="table-responsive">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3tableresponsivehover = '<div class="table-responsive">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3tablestriped = '<table class="table table-striped">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3tablestripedbgcolor = '        .table-striped > tbody > tr:nth-child(2n+1) > td,\n' +
        '        .table-striped > tbody > tr:nth-child(2n+1) > th {\n' +
        '            background-color: #acbedc;\n' +
        '        }\n';

    snippets.bs3tablestripedcolumnodd = '        .table-striped-column > tbody > tr td:nth-of-type(odd) {\n' +
        '            background-color: #dceacb;\n' +
        '        }\n';

    snippets.bs3tablestripedcolumneven = '   .table-striped-column-odd > tbody > tr td:nth-of-type(even) {\n' +
        '       background-color: #dceacb;\n' +
        '   }\n';


    snippets.bs3tablestripedhover = '<table class="table table-striped table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3tablecontextual = '<table class="table">\n' +
        '    <thead>\n' +
        '      <tr>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '      </tr>\n' +
        '    </thead>\n' +
        '    <tfoot>\n' +
        '      <tr>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '      </tr>\n' +
        '    </foot>\n' +
        '    <tbody>\n' +
        '      <tr class="active">\n' +
        '        <td>[active data]</td>\n' +
        '        <td>[active data]</td>\n' +
        '        <td>[active data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="success">\n' +
        '        <td>[success data]</td>\n' +
        '        <td>[success data]</td>\n' +
        '        <td>[success data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="info">\n' +
        '        <td>[info data]</td>\n' +
        '        <td>[info data]</td>\n' +
        '        <td>[info data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="warning">\n' +
        '        <td>[warning data]</td>\n' +
        '        <td>[warning data]</td>\n' +
        '        <td>[warning data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="danger">\n' +
        '        <td>[danger data]</td>\n' +
        '        <td>[danger data]</td>\n' +
        '        <td>[danger data]</td>\n' +
        '      </tr>\n' +
        '    </tbody>\n' +
        '  </table>\n';


    snippets.bs3tablecontextualtdcoloractive = '        .table tbody tr > td.active {\n' +
        '            background-color: #ced0cd !important;\n' +
        '        }\n' +
        '\n' +
        '        .table-hover tbody tr:hover > td.active {\n' +
        '            background-color: #a5a7a5 !important;\n' +
        '        }\n' +
        '\n';

    snippets.bs3tablecontextualtdcolorsuccess = '        .table tbody tr > td.success {\n' +
        '            background-color: #dff0d8 !important;\n' +
        '        }\n' +
        '\n' +
        '        .table-hover tbody tr:hover > td.success {\n' +
        '            background-color: #d0e9c6 !important;\n' +
        '        }\n' +
        '        \n';

    snippets.bs3tablecontextualtdcolordanger = '        .table tbody tr > td.danger {\n' +
        '            background-color: #f2dede !important;\n' +
        '        }\n' +
        '        .table-hover tbody tr:hover > td.danger {\n' +
        '            background-color: #ebcccc !important;\n' +
        '        }\n' +
        '        \n';

    snippets.bs3tablecontextualtdcolorwarning = '        .table tbody tr > td.warning {\n' +
        '            background-color: #fcf8e3 !important;\n' +
        '        }\n' +
        '        .table-hover tbody tr:hover > td.warning {\n' +
        '            background-color: #faf2cc !important;\n' +
        '        }\n' +
        '        \n';

    snippets.bs3tablecontextualtdcolorinfo = '        .table tbody tr > td.info {\n' +
        '            background-color: #d9edf7 !important;\n' +
        '        }\n' +
        '        .table-hover tbody tr:hover > td.info {\n' +
        '            background-color: #c4e3f3 !important;\n' +
        '        }\n';

    snippets.bs3tablecontextualtdcolorall = snippets.bs3tablecontextualtdcoloractive +
        snippets.bs3tablecontextualtdcolorsuccess +
        snippets.bs3tablecontextualtdcolordanger +
        snippets.bs3tablecontextualtdcolorwarning +
        snippets.bs3tablecontextualtdcolorinfo;

    // Tabs

    snippets.bs3tabs = '<div role="tabpanel">\n' +
        '    <!-- Nav tabs -->\n' +
        '    <ul class="nav nav-tabs" role="tablist">\n' +
        '        <li role="presentation" class="active">\n' +
        '            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">home</a>\n' +
        '        </li>\n' +
        '        <li role="presentation">\n' +
        '            <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">tab</a>\n' +
        '        </li>\n' +
        '    </ul>\n' +
        '\n' +
        '    <!-- Tab panes -->\n' +
        '    <div class="tab-content">\n' +
        '        <div role="tabpanel" class="tab-pane active" id="home">...</div>\n' +
        '        <div role="tabpanel" class="tab-pane" id="tab">...</div>\n' +
        '    </div>\n' +
        '</div>\n';

    snippets.bs3tabhover = '    <!-- Nav pills -->\n' +
        '    <ul class="nav nav-pills">\n' +
        '        <li class="active"><a href="#tab-1" data-toggle="tab">Tab 1</a>\n' +
        '        </li>\n' +
        '        <li><a href="#tab-2" data-toggle="tab">Tab 2</a>\n' +
        '        </li>\n' +
        '        <li><a href="#tab-3" data-toggle="tab">Tab 3</a>\n' +
        '        </li>\n' +
        '        <li><a href="#tab-4" data-toggle="tab">Tab 4</a>\n' +
        '        </li>\n' +
        '    </ul>\n\n' +
        '    <!-- Tab panes -->\n' +
        '    <div class="tab-content well">\n' +
        '        <div class="tab-pane active" id="tab-1">Content 1</div>\n' +
        '        <div class="tab-pane" id="tab-2">Content 2</div>\n' +
        '        <div class="tab-pane" id="tab-3">Content 3</div>\n' +
        '        <div class="tab-pane" id="tab-4">Content 4</div>\n' +
        '    </div>    \n' +
        '    <!-- Move this line to the last line of js declaration area -->\n' +
        '    <script src="https://cdn.rawgit.com/tonystar/bootstrap-hover-tabs/v3.1.1/bootstrap-hover-tabs.js"></script>\n';
    // HTML5 Tamplate

    snippets.bs3html5template = '<!DOCTYPE html>\n' +
        '<html lang="">\n' +
        '	<head>\n' +
        '		<meta charset="utf-8">\n' +
        '		<meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
        '		<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '		<title>Title Page</title>\n' +
        '\n' +
        '		<!-- Bootstrap CSS -->\n' +
        cdncss +
        '\n' +
        '		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n' +
        '		<!-- WARNING: Respond.js doesn t work if you view the page via file:// -->\n' +
        '		<!--[if lt IE 9]>\n' +
        '			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>\n' +
        '			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>\n' +
        '		<![endif]-->\n' +
        '	</head>\n' +
        '	<body>\n' +
        '		<h1 class="text-center">Hello World</h1>\n' +
        '\n' +
        cdnjs +
        '	</body>\n' +
        '</html>\n';

    // Wells

    snippets.bs3welllg = '<div class="well well-lg">\n\n' +
        '</div>\n';

    snippets.bs3wellsm = '<div class="well well-sm">\n\n' +
        '</div>\n';

    snippets.bs3well = '<div class="well">\n\n' +
        '</div>\n';

    // Portfolio Sample

    //
    // Site Blocks
    //

    snippets.bs3portfoliocss = '<!-- External Styles -->\n' +
        '<link href="assets/css/ionicons.css" rel="stylesheet"/>\n' +
        '<link href="assets/css/font-awesome.css" rel="stylesheet"/>\n' +
        '<link href="assets/js/source/jquery.fancybox.css" rel="stylesheet"/>\n' +
        '<link href="assets/js/animate.min.css" rel="stylesheet"/>\n' +
        '<link href="assets/css/animations.min.css" rel="stylesheet"/>\n' +
        '<link href="assets/css/style-blue.css" rel="stylesheet"/>\n' +
        '<link href="assets/js/vegas/jquery.vegas.min.css" rel="stylesheet"/>\n' +
        '<!-- End External Styles -->\n';

    snippets.bs3portfoliolibs = '<!-- External Libs -->\n' +
        '<script src="assets/js/vegas/jquery.vegas.min.js"></script>\n' +
        '<script src="assets/js/jquery.easing.min.jsj"></script>\n' +
        '<script src="assets/js/source/jquery.fancybox.js"></script>\n' +
        '<script src="assets/js/jquery.isotope.js"></script>\n' +
        '<script src="assets/js/appear.min.js"></script>\n' +
        '<script src="js/wow.min.js"></script>\n' +
        '<script src="assets/js/animations.min.js"></script>\n' +
        '<!-- End External Libs -->\n';

    snippets.bs3portfoliojs = '<!-- jQuery Functions inside tag <script> -->\n' +
        '$(document).ready(function () {\n' +
        '    // IMAGE BACKGROUND SLIDE SHOW\n' +
        '    $.vegas(\'slideshow\', {\n' +
        '        backgrounds: [\n' +
        '            {\n' +
        '                src: \'assets/img/background/1.jpg\',\n' +
        '                fade: 1000,\n' +
        '                delay: 12000\n' +
        '                },\n' +
        '            {\n' +
        '                src: \'assets/img/background/2.jpg\',\n' +
        '                fade: 1000,\n' +
        '                delay: 12000\n' +
        '                },\n' +
        '            {\n' +
        '                src: \'assets/img/background/3.jpg\',\n' +
        '                fade: 1000,\n' +
        '                delay: 12000\n' +
        '                }\n' +
        '            ]\n' +
        '    })(\'overlay\', {\n' +
        '        /** SLIDESHOW OVERLAY IMAGE **/\n' +
        '        src: \'assets/js/vegas/overlays/11.png\'\n' +
        '    });\n' +
        '    // OUR WORK - IMAGE EFFECTS\n' +
        '    $(\'.fancybox-media\').fancybox({\n' +
        '        openEffect: \'elastic\',\n' +
        '        closeEffect: \'elastic\',\n' +
        '        helpers: {\n' +
        '            title: {\n' +
        '                type: \'inside\'\n' +
        '            }\n' +
        '        }\n' +
        '    });\n' +
        '    $(window).load(function () {\n' +
        '        var $container = $(\'#work-div\');\n' +
        '        $container.isotope({\n' +
        '            filter: \'*\',\n' +
        '            animationOptions: {\n' +
        '                duration: 750,\n' +
        '                easing: \'linear\',\n' +
        '                queue: false\n' +
        '            }\n' +
        '        });\n' +
        '        $(\'.caegories a\').click(function () {\n' +
        '            $(\'.caegories .active\').removeClass(\'active\');\n' +
        '            $(this).addClass(\'active\');\n' +
        '            var selector = $(this).attr(\'data-filter\');\n' +
        '            $container.isotope({\n' +
        '                filter: selector,\n' +
        '                animationOptions: {\n' +
        '                    duration: 750,\n' +
        '                    easing: \'linear\',\n' +
        '                    queue: false\n' +
        '                }\n' +
        '            });\n' +
        '            return false;\n' +
        '        });\n' +
        '    });\n' +
        '}); \n' +
        'new WOW().init();\n' +
        '<!-- jQuery Function </script> -->\n';

    snippets.bs3portfoliomenu = '<!-- Replace or adapt body tag as follow     \n' +
        '    <body data-spy="scroll" data-target="#menu-section">\n' +
        '-->\n' +
        '\n' +
        '<!--MENU SECTION START-->\n' +
        '<div class="navbar navbar-inverse navbar-fixed-top scroll-me" id="menu-section">\n' +
        '    <div class="container">\n' +
        '        <div class="navbar-header">\n' +
        '            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n' +
        '                <span class="icon-bar"></span>\n' +
        '                <span class="icon-bar"></span>\n' +
        '                <span class="icon-bar"></span>\n' +
        '            </button>\n' +
        '            <a class="navbar-brand" href="#">YOUR BRAND</a>\n' +
        '        </div>\n' +
        '        <div class="navbar-collapse collapse">\n' +
        '            <ul class="nav navbar-nav navbar-right">\n' +
        '                <li><a href="#home">HOME</a>\n' +
        '                </li>\n' +
        '                <li><a href="#services">SERVICES</a>\n' +
        '                </li>\n' +
        '                <li><a href="#pricing">PRICING</a>\n' +
        '                </li>\n' +
        '                <li><a href="#work">WORK</a>\n' +
        '                </li>\n' +
        '                <li><a href="#team">TEAM</a>\n' +
        '                </li>\n' +
        '                <li><a href="#contact">CONTACT</a>\n' +
        '                </li>\n' +
        '                <li><a href="#signup">SIGN UP</a>\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!--MENU SECTION END-->\n';


    snippets.bs3portfoliocarouseltext = '<!-- Text Corousel -->\n' +
        '<div class="row">\n' +
        '    <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 ">\n' +
        '        <div id="carousel-slider" data-ride="carousel" class="carousel slide  animate-in" data-anim-type="fade-in-up">\n' +
        '            <div class="carousel-inner">\n' +
        '                <div class="item active">\n' +
        '                    <h3>Mussum ipsum cacilds</h3>\n' +
        '                    <p>ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. </p>\n' +
        '                </div>\n' +
        '                <div class="item">\n' +
        '                    <h3>Suco de cevadiss</h3>\n' +
        '                    <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. </p>\n' +
        '                </div>\n' +
        '                <!-- Add more Items as you want ... -->\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- End Text Carousel -->\n';

    snippets.bs3portfoliosocialbuttons = '<!-- Social Buttons -->\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2 scroll-me">\n' +
        '        <p>[INSERT A FIXED TEXT HERE]</p>\n' +
        '        <div class="social">\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-facebook "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-twitter"></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-google-plus "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-linkedin "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-pinterest "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-github "></i></a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- End Social Buttons -->\n';

    snippets.bs3portfolioservices = '<!-- SERVICE SECTION START -->\n' +
        '<div class="row text-center header">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 animate-in" data-anim-type="fade-in-up">\n' +
        '        <h3>Our Services</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-iphone"></i>\n' +
        '            <h3>iPhone Applications</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consecteturtellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-wrench"></i>\n' +
        '            <h3>Tools Development</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consecteturtellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-cloud"></i>\n' +
        '            <h3>Cloud Support</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellusnec, porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-android-chat"></i>\n' +
        '            <h3>Chat Applications</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-social-wordpress"></i>\n' +
        '            <h3>Word Press Portal</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-android-call"></i>\n' +
        '            <h3>VOIP Systems</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellusnec, porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-university"></i>\n' +
        '            <h3>e-Learning Portals</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-map"></i>\n' +
        '            <h3>Geo-processing Systems</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-cash"></i>\n' +
        '            <h3>Financial Apps</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec, porttitor  nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!--SERVICE SECTION END-->\n';

    snippets.bs3portfoliopricetable = '<!-- PRICING SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Pricing Options</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row pad-bottom animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">\n' +
        '        <div class="row db-padding-btm db-attached">\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>199\n' +
        '                        <small>per month</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">STARTER</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>30 Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>150 Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>3 year minimum</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing popular">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>499\n' +
        '                        <small>per month</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">PROFESSIONAL</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>50 Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>300 Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>2 year minimum</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>1.999\n' +
        '                        <small>per year</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">EXPERT</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>250 Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>500 Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>1 year minimum</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>12,599\n' +
        '                        <small>one time</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">CORPORATE</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>Unlimited Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>Unlimited Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead not Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>No Obligation</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- PRICING SECTION END -->\n';

    snippets.bs3portfoliowork = '<!-- WORK SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Our Works</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row text-center animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pad-bottom">\n' +
        '        <div class="caegories">\n' +
        '            <a href="#" data-filter="*" class="active btn btn-custom btn-custom-two btn-sm">All</a>\n' +
        '            <a href="#" data-filter=".hotsite" class="btn btn-custom btn-custom-two btn-sm">Hotsite</a>\n' +
        '            <a href="#" data-filter=".website" class="btn btn-custom btn-custom-two btn-sm">Website</a>\n' +
        '            <a href="#" data-filter=".iphone" class="btn btn-custom btn-custom-two btn-sm">iPhone</a>\n' +
        '            <a href="#" data-filter=".android" class="btn btn-custom btn-custom-two btn-sm">Android</a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row text-center animate-in" data-anim-type="fade-in-up" id="work-div">\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 iphone">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/1.jpg">\n' +
        '                <img src="assets/img/work/1.jpg" class="img-responsive img-rounded 1" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Lorem ipsum dolor sit amet</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 hotsite website">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/2.jpg">\n' +
        '                <img src="assets/img/work/2.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Integer blandit odio congue leo tristique tempus</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 iphone">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/3.jpg">\n' +
        '                <img src="assets/img/work/3.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Morbi mollis lectus et ipsum</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 hotsite">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/4.jpg">\n' +
        '                <img src="assets/img/work/4.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Ut tincidunt tortor sit amet sagittis sagittis</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 website">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/5.jpg">\n' +
        '                <img src="assets/img/work/5.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Aliquam sit amet libero eget nibh varius ultricies</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 android">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/6.jpg">\n' +
        '                <img src="assets/img/work/6.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Nunc eget ipsum eget odio ultrices molestie</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- WORK SECTION END -->\n';

    snippets.bs3portfolioteam = '<!-- TEAM SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Our Team</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/1.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-star"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> Larissa Carpenter</h3>\n' +
        '                <h5> <strong> Chief Executive Officer </strong></h5>\n' +
        '                <p>Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. </p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/2.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-monitor"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> John Doe</h3>\n' +
        '                <h5> <strong> Desktop Developer & Designer </strong></h5>\n' +
        '                <p>Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/3.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-iphone"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> Michael Lordman</h3>\n' +
        '                <h5> <strong> Mobile Developer & Designer </strong></h5>\n' +
        '                <p>Pharetra in mattis molestie, volutpat elementum justo.</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/4.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-briefcase"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> James Shang</h3>\n' +
        '                <h5> <strong> Sales Representative </strong></h5>\n' +
        '                <p>Cevadis im ampola pa arma uma pindureta. Nam varius eleifend, sed viverra nisl condimentum ut.</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- TEAM SECTION END -->\n';

    snippets.bs3portfoliocontact = '<!-- CONTACT SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Contact Details </h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="contact-wrapper">\n' +
        '            <h3>We Are Social</h3>\n' +
        '            <p>\n' +
        '                Aliquam tempus ante placerat, consectetur tellus nec, porttitor nulla.\n' +
        '            </p>\n' +
        '            <div class="social-below">\n' +
        '                <a href="#" class="btn button-custom btn-custom-two"> Facebook</a>\n' +
        '                <a href="#" class="btn button-custom btn-custom-two"> Twitter</a>\n' +
        '                <a href="#" class="btn button-custom btn-custom-two"> Google +</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="contact-wrapper">\n' +
        '            <h3>Quick Contact</h3>\n' +
        '            <h4><strong>Email : </strong> info@yuordomain.com </h4>\n' +
        '            <h4><strong>Call : </strong> +55-15-2102-6500 </h4>\n' +
        '            <h4><strong>Skype : </strong> YourSkypeHere </h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="contact-wrapper">\n' +
        '            <h3>Address : </h3>\n' +
        '            <h4>Rua Fernando Silva, 190</h4>\n' +
        '            <h4>Brazil</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!--CONTACT SECTION END-->\n';

    snippets.bs3portfoliosignupform = '<!-- SECTION SIGN UP START -->\n' +
        '<!--\n' +
        '    Must use follow <style>\n' +
        '\n' +
        '        .contact-page {\n' +
        '            padding-top: 20px;\n' +
        '            background: #a02d12;\n' +
        '            margin-top: -10px;\n' +
        '        }\n' +
        '        .center {\n' +
        '            font-size: 12px;\n' +
        '            margin-top: 0;\n' +
        '            margin-bottom: 10px;\n' +
        '            text-align: center;\n' +
        '            color: #fff;\n' +
        '            text-transform: uppercase;\n' +
        '        }\n' +
        '-->\n' +
        '<div class="contact-page">\n' +
        '    <div class="container">\n' +
        '        <div class="center">\n' +
        '            <h2>Sign up to be notified</h2>\n' +
        '        </div>\n' +
        '        <div class="row contact-wrap">\n' +
        '            <div class="status alert alert-success" style="display: none"></div>\n' +
        '            <form id="main-contact-form" class="contact-form" name="contact-form" method="post" action="[change.php]">\n' +
        '                <div class="wow fadeInDown">\n' +
        '                    <div class="col-sm-5 col-sm-offset-1">\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Name *</label>\n' +
        '                            <input type="text" name="name" class="form-control" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Email *</label>\n' +
        '                            <input type="email" name="email" class="form-control" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Phone *</label> \n' +
        '                            <input type="tel" class="form-control" value="" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Company Name</label>\n' +
        '                            <input type="text" class="form-control">\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="wow fadeInRight">\n' +
        '                    <div class="col-sm-5">\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Subject *</label>\n' +
        '                            <input type="text" name="subject" class="form-control" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Message *</label>\n' +
        '                            <textarea name="message" id="message" required="required" class="form-control" rows="8"></textarea>\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <button type="submit" name="submit" class="btn btn-primary btn-lg" required="required">Submit Message</button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </form>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- SECTION SIGN UP END -->\n';

    snippets.bs3portfoliocopyright = '<section id="copyright">\n' +
        '    <div class="container">\n' +
        '        <div class="footer-div center">\n' +
        '            &copy; 2015 YourDomain | <a href="http://www.YourDomain.com/" target="_blank">by Your Company Here</a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>    \n';

    snippets.bs3portfoliosignupcss = '        .contact-page {\n' +
        '            padding-top: 20px;\n' +
        '            background: #a02d12;\n' +
        '            margin-top: -10px;\n' +
        '        }\n' +
        '        \n' +
        '        .center {\n' +
        '            font-size: 12px;\n' +
        '            margin-top: 0;\n' +
        '            margin-bottom: 10px;\n' +
        '            text-align: center;\n' +
        '            color: #fff;\n' +
        '            text-transform: uppercase;\n' +
        '        }\n';

    // Bootsketch : Wireframe theme for Bootstrap 3 Support - https://github.com/Yago/Bootsketch

    snippets.bs3sketchcss = '<link href="sketch/css/bootsketch.css" rel="stylesheet" />\n';
    snippets.bs3sketchjs = '<script src="sketch/js/vendors.min.js"></script>\n';

    // Bootwatch Templates

    snippets.bs3bootswatchcerulean = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/cerulean/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchcosmo = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/cosmo/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchcustom = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/custom/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchcyborg = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/cyborg/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchdarkly = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/darkly/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchflatly = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/flatly/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchjournal = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/journal/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchlumen = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/lumen/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchpaper = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/paper/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchreadble = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/readable/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchsandstone = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/sandstone/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchsimplex = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/simplex/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchslate = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/slate/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchspacelab = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/spacelab/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchsuperhero = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/superhero/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchunited = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/united/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs3bootswatchyeti = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/yeti/bootstrap.min.css" rel="stylesheet" />\n';

    // Data Table and Table Smples- datatable.net


    snippets.bs3datatableinit = '$(document).ready(function() {\n' +
        '$(\'#example \').DataTable();\n' +
        '} );\n';

    snippets.bs3tablesampleheader = '            <thead>\n' +
        '                <tr>\n' +
        '                    <th>Name</th>\n' +
        '                    <th>Position</th>\n' +
        '                    <th>Office</th>\n' +
        '                    <th>Age</th>\n' +
        '                    <th>Start date</th>\n' +
        '                    <th>Salary</th>\n' +
        '                </tr>\n' +
        '            </thead>\n';

    snippets.bs3tablesamplefooter = '            <tfoot>\n' +
        '                <tr>\n' +
        '                    <th>Name</th>\n' +
        '                    <th>Position</th>\n' +
        '                    <th>Office</th>\n' +
        '                    <th>Age</th>\n' +
        '                    <th>Start date</th>\n' +
        '                    <th>Salary</th>\n' +
        '                </tr>\n' +
        '            </tfoot>\n';

    snippets.bs3tablesample = '<table class="table">\n' +
        '    <thead>\n' +
        '        <tr>\n' +
        '            <th>Name</th>\n' +
        '            <th>Position</th>\n' +
        '            <th>Office</th>\n' +
        '            <th>Age</th>\n' +
        '            <th>Start date</th>\n' +
        '            <th>Salary</th>\n' +
        '        </tr>\n' +
        '    </thead>\n' +
        '\n' +
        '    <tfoot>\n' +
        '        <tr>\n' +
        '            <th>Name</th>\n' +
        '            <th>Position</th>\n' +
        '            <th>Office</th>\n' +
        '            <th>Age</th>\n' +
        '            <th>Start date</th>\n' +
        '            <th>Salary</th>\n' +
        '        </tr>\n' +
        '    </tfoot>\n' +
        '\n' +
        '    <tbody>\n' +
        '        \n' +
        '        [insert data here Ex: bs3tablesamplerows10 .. bs3tablesamplerows50]\n' +
        '        \n' +
        '    </tbody>\n' +
        '</table>\n';

    snippets.bs3tablesamplerows10 = '            <tr>\n' +
        '                <td>Tiger Nixon</td>\n' +
        '                <td>System Architect</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>61</td>\n' +
        '                <td>2011/04/25</td>\n' +
        '                <td>$320,800</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Garrett Winters</td>\n' +
        '                <td>Accountant</td>\n' +
        '                <td>Tokyo</td>\n' +
        '                <td>63</td>\n' +
        '                <td>2011/07/25</td>\n' +
        '                <td>$170,750</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Ashton Cox</td>\n' +
        '                <td>Junior Technical Author</td>\n' +
        '                <td>San Francisco</td>\n' +
        '                <td>66</td>\n' +
        '                <td>2009/01/12</td>\n' +
        '                <td>$86,000</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Cedric Kelly</td>\n' +
        '                <td>Senior Javascript Developer</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>22</td>\n' +
        '                <td>2012/03/29</td>\n' +
        '                <td>$433,060</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Airi Satou</td>\n' +
        '                <td>Accountant</td>\n' +
        '                <td>Tokyo</td>\n' +
        '                <td>33</td>\n' +
        '                <td>2008/11/28</td>\n' +
        '                <td>$162,700</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Brielle Williamson</td>\n' +
        '                <td>Integration Specialist</td>\n' +
        '                <td>New York</td>\n' +
        '                <td>61</td>\n' +
        '                <td>2012/12/02</td>\n' +
        '                <td>$372,000</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Herrod Chandler</td>\n' +
        '                <td>Sales Assistant</td>\n' +
        '                <td>San Francisco</td>\n' +
        '                <td>59</td>\n' +
        '                <td>2012/08/06</td>\n' +
        '                <td>$137,500</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Rhona Davidson</td>\n' +
        '                <td>Integration Specialist</td>\n' +
        '                <td>Tokyo</td>\n' +
        '                <td>55</td>\n' +
        '                <td>2010/10/14</td>\n' +
        '                <td>$327,900</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Colleen Hurst</td>\n' +
        '                <td>Javascript Developer</td>\n' +
        '                <td>San Francisco</td>\n' +
        '                <td>39</td>\n' +
        '                <td>2009/09/15</td>\n' +
        '                <td>$205,500</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Sonya Frost</td>\n' +
        '                <td>Software Engineer</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>23</td>\n' +
        '                <td>2008/12/13</td>\n' +
        '                <td>$103,600</td>\n' +
        '            </tr>\n';

    snippets.bs3tablesamplerows20 = snippets.bs3tablesamplerows10 + '                <tr>\n' +
        '                    <td>Jena Gaines</td>\n' +
        '                    <td>Office Manager</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>30</td>\n' +
        '                    <td>2008/12/19</td>\n' +
        '                    <td>$90,560</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Quinn Flynn</td>\n' +
        '                    <td>Support Lead</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>22</td>\n' +
        '                    <td>2013/03/03</td>\n' +
        '                    <td>$342,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Charde Marshall</td>\n' +
        '                    <td>Regional Director</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>36</td>\n' +
        '                    <td>2008/10/16</td>\n' +
        '                    <td>$470,600</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Haley Kennedy</td>\n' +
        '                    <td>Senior Marketing Designer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>43</td>\n' +
        '                    <td>2012/12/18</td>\n' +
        '                    <td>$313,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Tatyana Fitzpatrick</td>\n' +
        '                    <td>Regional Director</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>19</td>\n' +
        '                    <td>2010/03/17</td>\n' +
        '                    <td>$385,750</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Michael Silva</td>\n' +
        '                    <td>Marketing Designer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>66</td>\n' +
        '                    <td>2012/11/27</td>\n' +
        '                    <td>$198,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Paul Byrd</td>\n' +
        '                    <td>Chief Financial Officer (CFO)</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>64</td>\n' +
        '                    <td>2010/06/09</td>\n' +
        '                    <td>$725,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gloria Little</td>\n' +
        '                    <td>Systems Administrator</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>59</td>\n' +
        '                    <td>2009/04/10</td>\n' +
        '                    <td>$237,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Bradley Greer</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>41</td>\n' +
        '                    <td>2012/10/13</td>\n' +
        '                    <td>$132,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Dai Rios</td>\n' +
        '                    <td>Personnel Lead</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>35</td>\n' +
        '                    <td>2012/09/26</td>\n' +
        '                    <td>$217,500</td>\n' +
        '                </tr>\n';

    snippets.bs3tablesamplerows30 = snippets.bs3tablesamplerows20 + '                <tr>\n' +
        '                    <td>Jenette Caldwell</td>\n' +
        '                    <td>Development Lead</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>30</td>\n' +
        '                    <td>2011/09/03</td>\n' +
        '                    <td>$345,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Yuri Berry</td>\n' +
        '                    <td>Chief Marketing Officer (CMO)</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>40</td>\n' +
        '                    <td>2009/06/25</td>\n' +
        '                    <td>$675,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Caesar Vance</td>\n' +
        '                    <td>Pre-Sales Support</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>21</td>\n' +
        '                    <td>2011/12/12</td>\n' +
        '                    <td>$106,450</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Doris Wilder</td>\n' +
        '                    <td>Sales Assistant</td>\n' +
        '                    <td>Sidney</td>\n' +
        '                    <td>23</td>\n' +
        '                    <td>2010/09/20</td>\n' +
        '                    <td>$85,600</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Angelica Ramos</td>\n' +
        '                    <td>Chief Executive Officer (CEO)</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>47</td>\n' +
        '                    <td>2009/10/09</td>\n' +
        '                    <td>$1,200,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gavin Joyce</td>\n' +
        '                    <td>Developer</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>42</td>\n' +
        '                    <td>2010/12/22</td>\n' +
        '                    <td>$92,575</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Jennifer Chang</td>\n' +
        '                    <td>Regional Director</td>\n' +
        '                    <td>Singapore</td>\n' +
        '                    <td>28</td>\n' +
        '                    <td>2010/11/14</td>\n' +
        '                    <td>$357,650</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Brenden Wagner</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>28</td>\n' +
        '                    <td>2011/06/07</td>\n' +
        '                    <td>$206,850</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Fiona Green</td>\n' +
        '                    <td>Chief Operating Officer (COO)</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>48</td>\n' +
        '                    <td>2010/03/11</td>\n' +
        '                    <td>$850,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Shou Itou</td>\n' +
        '                    <td>Regional Marketing</td>\n' +
        '                    <td>Tokyo</td>\n' +
        '                    <td>20</td>\n' +
        '                    <td>2011/08/14</td>\n' +
        '                    <td>$163,000</td>\n' +
        '                </tr>\n';

    snippets.bs3tablesamplerows40 = snippets.bs3tablesamplerows30 + '                <tr>\n' +
        '                    <td>Michelle House</td>\n' +
        '                    <td>Integration Specialist</td>\n' +
        '                    <td>Sidney</td>\n' +
        '                    <td>37</td>\n' +
        '                    <td>2011/06/02</td>\n' +
        '                    <td>$95,400</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Suki Burks</td>\n' +
        '                    <td>Developer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>53</td>\n' +
        '                    <td>2009/10/22</td>\n' +
        '                    <td>$114,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Prescott Bartlett</td>\n' +
        '                    <td>Technical Author</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>27</td>\n' +
        '                    <td>2011/05/07</td>\n' +
        '                    <td>$145,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gavin Cortez</td>\n' +
        '                    <td>Team Leader</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>22</td>\n' +
        '                    <td>2008/10/26</td>\n' +
        '                    <td>$235,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Martena Mccray</td>\n' +
        '                    <td>Post-Sales support</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>46</td>\n' +
        '                    <td>2011/03/09</td>\n' +
        '                    <td>$324,050</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Unity Butler</td>\n' +
        '                    <td>Marketing Designer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>47</td>\n' +
        '                    <td>2009/12/09</td>\n' +
        '                    <td>$85,675</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Howard Hatfield</td>\n' +
        '                    <td>Office Manager</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>51</td>\n' +
        '                    <td>2008/12/16</td>\n' +
        '                    <td>$164,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Hope Fuentes</td>\n' +
        '                    <td>Secretary</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>41</td>\n' +
        '                    <td>2010/02/12</td>\n' +
        '                    <td>$109,850</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Vivian Harrell</td>\n' +
        '                    <td>Financial Controller</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>62</td>\n' +
        '                    <td>2009/02/14</td>\n' +
        '                    <td>$452,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Timothy Mooney</td>\n' +
        '                    <td>Office Manager</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>37</td>\n' +
        '                    <td>2008/12/11</td>\n' +
        '                    <td>$136,200</td>\n' +
        '                </tr>\n';

    snippets.bs3tablesamplerows50 = snippets.bs3tablesamplerows40 + '                <tr>\n' +
        '                    <td>Jackson Bradshaw</td>\n' +
        '                    <td>Director</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>65</td>\n' +
        '                    <td>2008/09/26</td>\n' +
        '                    <td>$645,750</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Olivia Liang</td>\n' +
        '                    <td>Support Engineer</td>\n' +
        '                    <td>Singapore</td>\n' +
        '                    <td>64</td>\n' +
        '                    <td>2011/02/03</td>\n' +
        '                    <td>$234,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Bruno Nash</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>38</td>\n' +
        '                    <td>2011/05/03</td>\n' +
        '                    <td>$163,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Sakura Yamamoto</td>\n' +
        '                    <td>Support Engineer</td>\n' +
        '                    <td>Tokyo</td>\n' +
        '                    <td>37</td>\n' +
        '                    <td>2009/08/19</td>\n' +
        '                    <td>$139,575</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Thor Walton</td>\n' +
        '                    <td>Developer</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>61</td>\n' +
        '                    <td>2013/08/11</td>\n' +
        '                    <td>$98,540</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Finn Camacho</td>\n' +
        '                    <td>Support Engineer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>47</td>\n' +
        '                    <td>2009/07/07</td>\n' +
        '                    <td>$87,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Serge Baldwin</td>\n' +
        '                    <td>Data Coordinator</td>\n' +
        '                    <td>Singapore</td>\n' +
        '                    <td>64</td>\n' +
        '                    <td>2012/04/09</td>\n' +
        '                    <td>$138,575</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Zenaida Frank</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>63</td>\n' +
        '                    <td>2010/01/04</td>\n' +
        '                    <td>$125,250</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Zorita Serrano</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>56</td>\n' +
        '                    <td>2012/06/01</td>\n' +
        '                    <td>$115,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Jennifer Acosta</td>\n' +
        '                    <td>Junior Javascript Developer</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>43</td>\n' +
        '                    <td>2013/02/01</td>\n' +
        '                    <td>$75,650</td>\n' +
        '                </tr>\n';

    snippets.bs3datatablesampledata = '<table id="example" class="table table-striped" cellspacing="0" width="100%">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>Name</th>\n' +
        '                <th>Position</th>\n' +
        '                <th>Office</th>\n' +
        '                <th>Age</th>\n' +
        '                <th>Start date</th>\n' +
        '                <th>Salary</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        ' \n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>Name</th>\n' +
        '                <th>Position</th>\n' +
        '                <th>Office</th>\n' +
        '                <th>Age</th>\n' +
        '                <th>Start date</th>\n' +
        '                <th>Salary</th>\n' +
        '            </tr>\n' +
        '        </tfoot>\n' +
        ' \n' +
        '        <tbody>\n' +
        snippets.bs3tablesamplerows50 +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs3csvimportjs = '       $(document).ready(function() {\n' +
        '\n' +
        '            if (isAPIAvailable()) {\n' +
        '                $(\'#files\').bind(\'change\', handleFileSelect);\n' +
        '            }\n' +
        '\n' +
        '        });\n' +
        '\n' +
        '        function isAPIAvailable() {\n' +
        '            if (window.File && window.FileReader && window.FileList && window.Blob) {\n' +
        '                return true;\n' +
        '            } else {\n' +
        '                document.writeln(\'The HTML5 APIs used in this form are only available in the following browsers:<br />\');\n' +
        '                document.writeln(\' - Google Chrome: 13.0 or later<br />\');\n' +
        '                document.writeln(\' - Mozilla Firefox: 6.0 or later<br />\');\n' +
        '                document.writeln(\' - Internet Explorer: Not supported (partial support expected in 10.0)<br />\');\n' +
        '                document.writeln(\' - Safari: Not supported<br />\');\n' +
        '                document.writeln(\' - Opera: Not supported\');\n' +
        '                return false;\n' +
        '            }\n' +
        '        }\n' +
        '\n' +
        '        function handleFileSelect(evt) {\n' +
        '            var files = evt.target.files;\n' +
        '            var file = files[0];\n' +
        '            var reader = new FileReader();\n' +
        '            reader.readAsText(file);\n' +
        '            reader.onload = function(event) {\n' +
        '                var csv = event.target.result;\n' +
        '                var data = $.csv.toArrays(csv);\n' +
        '                var html = \'<thead>\';\n' +
        '                var thend = \'</thead>\';\n' +
        '                var rowtag = \'th\';\n' +
        '\n' +
        '                for (var row in data) {\n' +
        '                    html += \'<tr>\';\n' +
        '                    for (var item in data[row]) {\n' +
        '                        html += \'<\' + rowtag + \'>\' + data[row][item] + \'</\' + rowtag + \'>\';\n' +
        '                    }\n' +
        '                    html += \'</tr>\';\n' +
        '                    html += thend;\n' +
        '                    thend = \'\';\n' +
        '                    rowtag = \'td\';\n' +
        '                }\n' +
        '                $(\'#contents\').html(html);\n' +
        '                $(\'#contents\').DataTable();\n' +
        '            };\n' +
        '            reader.onerror = function() {\n' +
        '                alert(\'Unable to read \' + file.fileName);\n' +
        '            };\n' +
        '        }\n';

    snippets.bs3fileupload = '        <div class="fileinput fileinput-new input-group" data-provides="fileinput">\n' +
        '            <div class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div>\n' +
        '            <span class="input-group-addon btn btn-default btn-file"><span class="fileinput-new">Select file</span><span class="fileinput-exists">Change</span>\n' +
        '            <input id="files" type="file" class="file" name="files[]">\n' +
        '            </span>\n' +
        '            <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>\n' +
        '        </div>        \n';

    module.exports = snippets;
});
