<?php

namespace App\Http\Controllers;
use App\Models\Time;

use Illuminate\Http\Request;

class TimeController extends Controller
{
    public function time()
    {
        $time = new Time();
        $time->time = 'Creating Time';
        $time->expires_at = now()->addSeconds(60);
        $time->save();

        return 'Created';
    }

    public function checkTime($id){

        $resource = 'Yeah You made it';

        $time = Time::find($id);

        if ($time->expires_at->lt(now())) {
            
            $time->delete();
            return 'Your Code has expired';
        }

        else{
            return $resource;
        }
    }
}
