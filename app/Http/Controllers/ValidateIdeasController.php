<?php

namespace App\Http\Controllers;

use App\Models\PropositionPFE;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ValidateIdeasController extends Controller
{
    public function index()
    {
        try {
            $propositions = PropositionPFE::with('user')->get();
    
            Log::info('Fetched propositions:', [
                'count' => $propositions->count(),
                'data' => $propositions->toArray()
            ]);

            return Inertia::render('teacher/ValidateIdeas', [
                'propositions' => $propositions
            ]);
        } catch (\Exception $e) {
            Log::error('Error in ValidateIdeasController@index: ' . $e->getMessage());
            return Inertia::render('teacher/ValidateIdeas', [
                'error' => 'An error occurred while fetching data: ' . $e->getMessage(),
                'propositions' => []
            ]);
        }
    }
}

