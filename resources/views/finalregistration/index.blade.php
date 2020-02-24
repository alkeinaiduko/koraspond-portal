@extends('layouts.portal', ['vueModulePath' => 'js/modules/finalregistration/main.js'])
@section('page_title', 'Final Registration')

@section('content')
    <final-registration :user="{{ Auth::user() }}" />
@stop
