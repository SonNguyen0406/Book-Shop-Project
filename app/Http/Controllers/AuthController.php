<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email', $request-> email)->first();
        if(!$user || !Hash::check($request->password, $user->password, [])) {
            return response()->json(
                [
                    'status_code' => 400,
                    'message' => "Bad Request"
                ],
                400
            );
        };
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'type' => "Bearer"
        ]);
    }

    public function logout()
    {
        $user = request()->user();
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        return response()->json([
                'status_code' => 200,
                'message' => "Logout",
            ],
            200
        );
    }
}