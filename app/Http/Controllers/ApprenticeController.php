<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apprentice;

class ApprenticeController extends Controller
{
    public function index()
    {
        return response()->json(Apprentice::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:apprentices',
            'ficha' => 'required|string|max:50'
        ]);

        $apprentice = Apprentice::create($request->all());
        return response()->json([
            'message' => 'Aprendiz creado exitosamente',
            'data' => $apprentice
        ], 201);
    }
}
