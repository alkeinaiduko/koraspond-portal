@extends('layouts.admin', ['vueModulePath' => 'js/modules/admin-dashboard/main.js'])
@section('page_title', 'Admin Dashboard')

@section('content')
    <admin-dashboard :user="{{ Auth::guard('admin')->user() }}" />
@stop
