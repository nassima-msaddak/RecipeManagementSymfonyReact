<?php

namespace App\Controller;

use App\Repository\RecipRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

// nassima : créer via ==> php bin/console make:controller RecipController  (NB :  "extends AbstractController" )

final class RecipController extends AbstractController
{
    #[Route('/api/recettes', name: 'recip.index')]
    public function index(Request $request, RecipRepository $recipRepository): Response
    {
       $allRecip =  $recipRepository->findAll();
//       dd($allRecip);
        return $this->render('recip/index.html.twig', [
            'recipss' => $allRecip,
            'controller_name' => 'RecipController',
        ]);
    }

    #[Route('/api/recettesForReactProject', name: 'recip.react')]
    public function indexReact(Request $request, RecipRepository $recipRepository): JsonResponse
    {
        return $this->json($recipRepository->findAll());
    }


//
//    #[Route('/recip', name: 'app_recip')]
//    public function index(): Response
//    {
//        return $this->render('recip/index.html.twig', [
//            'controller_name' => 'RecipController',
//        ]);
//    }

//nassima :  https://tutosymfonygrafikart.ddev.site/recette/pate-boulognaise-58
    #[Route('/recette/{slug}-{id}', name: 'recip.show', requirements: ['id' => '\d+' , 'slug' => '[a-z0-9-]+'])]
    public function show(Request $request, string $slug , int $id): Response
    {
//            return new JsonResponse([
//                'slug' => $slug ,
//                'id' => $id
//            ]);

        return $this->render('recip/show-details.html.twig', [
            'slug' => $slug ,
             'id' => $id,
            'demo_echap' => '<strong> échap HTML pour des raisons de sécurité</strong>',

            'person' => [
                'first_name' => 'Nassima',
                'last_name' => 'Msaddak',
            ],
        ]);

    }



}
