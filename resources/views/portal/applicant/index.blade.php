@extends('layouts.portal', ['vueModulePath' => 'js/modules/portal/main.js'])
@section('page_title', 'Home')

@section('content')
    <portal-home :user="{{ Auth::user() }}" />
@stop
