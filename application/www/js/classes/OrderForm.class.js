var OrderForm = function()
{
  this.$form = $('#order-form');
  this.$meal = $('#meal');
  this.$mealDetails = $('#meal-details');
  this.$orderSummary = $('#order-summary');
  this.$validateOrder = $('#validate-order');
};

OrderForm.prototype.onAjaxChangeMeal = function(meal)
{
  var imageUrl;
  imageUrl = getWwwUrl() + "/images/meals" + meal.Photo;

  //mise à jour de l'affichage
  this.$mealDetails.children('p').text(meal.Description);
  this.$mealDetails.find('strong').text(meal.SalePrice);
  this.$mealDetails.children('img').attr("src", imageUrl);
  this.$form.find('input[name=salePrice]').val(meal.SalePrice);
};

OrderForm.prototype.onAjaxRefreshOrderSummary = function(basketViewHtml)
{
  //Insertion du contenu du panier (la vue en PHP) dans le document HTML.
    this.$orderSummary.html(basketViewHtml);

//verification du panier si il est vide le btn validation désactivé sinon il est actif: 
    if(this.BasketSession.isEmpty() == true)
    {
        this.$validateOrder.attr('disabled', true);
    }
    else
    {
        this.$validateOrder.attr('disabled', false);
    }
};

OrderForm.prototype.onChangeMeal = function()
{
  //   Récupération de l'id de l'aliment sélectionné dans la liste déroulante.
  //
	// Exécution d'une requête HTTP GET AJAJ (Asynchronous JavaScript And JSON)
  //    pour récupérer les informations de l'aliment sélectionné dans la liste déroulante.
  //
  var mealId;
  mealId = this.$meal.val();
   $.getJSON(
     getRequestUrl() + '/meal?id=' + mealId,
     this.onAjaxChangeMeal.bind(this)
   )
};

OrderForm.prototype.onClickRemoveBasketItem = function(event)
{
  var $button;
  var mealId;

  // Récupération de l'objet jQuery représentant le bouton de suppression sur
  //lequel l'utilisateur a cliqué.
    $button = $(event.currentTarget);
  
  //      Récupération du produit alimentaire relié au bouton.
    mealId = $button.data('id');
  //      Suppression du produit alimentaire du panier.
    this.BasketSession.remove(mealId);
  //      Mise à jour du récapitulatif de la commande.
    this.refreshOrderSummary();
  
  //   Par défaut les navigateurs ont pour comportement d'envoyer le formulaire
  //   en requête HTTP à l'URL indiquée dans l'attribut action des balises <form>
  //
  //   Il faut donc empêcher le comportement par défaut du navigateur.
  //
    event.preventDefault();
};

OrderForm.prototype.refreshOrderSummary = function()
{
  var formFields;

  // public function httpPostMethod(Http $http, array $formFields)

  // Préparation d'une requête HTTP POST, construction d'un objet représentant
  //    les données de formulaire.
  //
  //   Ainsi form.basketItems donnera du côté du serveur en PHP $formFields['basketItems']
  //
  //    Exécution d'une requête HTTP POST AJAH (Asynchronous JavaScript And HTML)
  //   pour récupérer le contenu du panier sous la forme d'un document HTML.
  //
  //   $post(
  //    URL destination
  //    Données HTTP POST
  //    Au retour de la réponse HTTP
  //
  //   )
};

OrderForm.prototype.run = function()
{

  $('#OrderForm option').addEventListener('click', onChangeMeal);

  $('#OrderForm option').trigger('click');

 //  Installation d'un gestionnaire d'évènement sur la sélection d'un aliment
 //    *dans la liste déroulante des aliments.
 //
 // 	 Utilisation de la méthode jQuery trigger() pour déclencher dès maintenant
 //     *l'évènement de la liste déroulante afin d'afficher le premier aliment de la liste.
 //
 // 	 Installation d'un gestionnaire d'évènement FUTUR sur le clic des boutons de
 //     * suppression d'un article du panier.
 //     *
 //     * A cet instant il n'y a pas de bouton puisque c'est refreshOrderSummary() qui
 //     * génère cette partie du document HTML. Il peut n'y avoir aucun bouton (panier
 //     * vide) comme il peut y en avoir une dizaine, un pour chaque article du panier.
 //
 //
 //
 //     Installation d'un gestionnaire d'évènement sur le clic du bouton de validation
 //     * de la commande.
 //
 //     Installation d'un gestionnaire d'évènement sur la soumission du formulaire.
 //    //this.$form.on('submit', this.onSubmitForm.bind(this));
 //    this.$form.find('[type=submit]').on('click', this.onSubmitForm.bind(this));
 //
 //
 //     * Le formulaire est caché au démarrage (pour éviter le clignotement de la page),
 //     * il faut l'afficher.
 //
 //     Affichage initial du récapitulatif de la commande.
 //
 // }
 //
	// OrderForm.prototype.success = function(){
 //
 //    Effacement du panier.

};
