<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Instructor;

class InstructorController extends Controller
{
    public function index()
    {
        return response()->json(Instructor::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:instructors',
            'specialty' => 'required|string|max:255'
        ]);

        $instructor = Instructor::create($request->all());
        return response()->json([
            'message' => 'Instructor creado exitosamente',
            'data' => $instructor
        ], 201);
    }
}
