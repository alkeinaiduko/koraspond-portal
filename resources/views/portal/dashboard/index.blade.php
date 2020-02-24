@extends('layouts.portal', ['vueModulePath' => 'js/modules/dashboard/main.js'])
@section('page_title', 'Dashboard')

@section('content')
    <dashboard :user="{{ Auth::user() }}" />
@stop
