<?php

namespace App\Http\Middleware;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    protected function redirectTo($request)
    {
        $route = \Request::route()->getName();

        switch ($route) {
            case 'admin.index':
                if (!Auth::guard('admin')->check()) {
                    return route('admin.login');
                }
            break;

            default:
                if (!Auth::check()) {
                    return route('welcome');
                }
            break;
        }
    }
}
