<?php 

namespace App\Controller;

class PostsController extends AppController
{

    public function initialize()
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
    }

    public function index()
    {
        $posts = $this->Posts->find('all');
        $this->set([
            'posts' => $posts,
            '_serialize' => ['posts']
        ]);
    }
}