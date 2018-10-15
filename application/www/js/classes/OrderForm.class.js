var OrderForm = function()
{
  this.$form = $('#order-form');
  this.$meal = $('.meal');
  this.$mealDetails = $('#mealDetails');
  this.$orderSummary = $('#orderSummary');
  this.$basketView = $('#basketView');
}

OrderForm.prototype.onAjaxChangeMeal = function(meal)
{
  var imageUrl;
  imageUrl = getWwwUrl() + "/images/meals" + meal.Photo;

  //mise à jour de l'affichage
  this.$mealDetails.children('p').text(meal.Description);
  this.$mealDetails.children('.mealPrice').text(meal.SalePrice);
  this.$mealDetails.children('img').src = imageUrl;
  this.$mealDetails.children('input').val = meal.SalePrice;
};

OrderForm.prototype.onAjaxRefreshOrderSummary = function(basketViewHtml)
{
  //Insertion du contenu du panier (la vue en PHP) dans le document HTML.
  this.$basketView.text(basketViewHtml);
};

OrderForm.prototype.onChangeMeal = function()
{
  var mealId;
  mealId = this.$meal.val();
  //   Récupération de l'id de l'aliment sélectionné dans la liste déroulante.
  //
	// Exécution d'une requête HTTP GET AJAJ (Asynchronous JavaScript And JSON)
  //    pour récupérer les informations de l'aliment sélectionné dans la liste déroulante.
  //
   $.getJSON(
     getRequestUrl() + '/meal?id=' + mealId,
     this.onAjaxChangeMeal.bind(this)
   )
};

OrderForm.prototype.onClickRemoveBasketItem = function(event)
{
  var $button;
  var mealId;
  //
  // Récupération de l'objet jQuery représentant le bouton de suppression sur
  //    lequel l'utilisateur a cliqué.
  //
  //      Récupération du produit alimentaire relié au bouton.
  //
  //      Suppression du produit alimentaire du panier.
  //
  //      Mise à jour du récapitulatif de la commande.
  //
  //
  //       Par défaut les navigateurs ont pour comportement d'envoyer le formulaire
  //   en requête HTTP à l'URL indiquée dans l'attribut action des balises <form>
  //
  //   Il faut donc empêcher le comportement par défaut du navigateur.
  //
  //   event.preventDefault();
}

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
}

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

}
