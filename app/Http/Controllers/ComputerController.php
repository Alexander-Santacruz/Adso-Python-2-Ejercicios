<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Computer;

class ComputerController extends Controller
{
    public function index()
    {
        return response()->json(Computer::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'serial' => 'required|string|max:255|unique:computers',
            'brand' => 'required|string|max:255',
            'status' => 'required|string|max:50'
        ]);

        $computer = Computer::create($request->all());
        return response()->json([
            'message' => 'Computador creado exitosamente',
            'data' => $computer
        ], 201);
    }
}
