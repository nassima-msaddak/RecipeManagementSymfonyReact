<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController  // nassima : ajouter "extends AbstractController"  pour  nous fournir de méthodes supplémentaires
{
    // nassima : https://backsymfony.ddev.site/api/home
    #[Route('/api/home', name: 'app_home_page')]
    public function index(Request $request): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
