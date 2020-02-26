@extends('layouts.portal', ['vueModulePath' => 'js/modules/finalregistration/main.js'])
@section('page_title', 'Complete Registration')

@section('content')
    <complete-registration :user="{{ $user }}" />
@stop
