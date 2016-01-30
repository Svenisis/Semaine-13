angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.soluce1 = "";
					
	
		$scope.questions = [
	
			{id:"01",
			 categorie:"Jeux videos",
			 question:"Qui a crée Diablo?",
			 reponseA:"Blizzard",
			 reponseB:"Bohemia Interracive",
			 reponseC:"Onghar",
			 reponseD:"Ubisoft",
			 correct:"reponseA",
			 bonneReponse:"Blizzard",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://image.noelshack.com/fichiers/2016/04/1454160114-diablo-3.jpg"
			},
			{id:"02",
			 categorie:"Animateur",
			 question:"Quel diplome faut passer pour être Animateur?",
			 reponseA:"CAP",
			 reponseB:"Bafa",
			 reponseC:"Bac pro",
			 reponseD:"La reponse D",
			 correct:"reponseB",
			 bonneReponse:"Bafa",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://image.noelshack.com/fichiers/2016/04/1454160190-animateur-colo.jpg"
			},
			{id:"03",
			 categorie:"Chanteur",
			 question:"Qui chante allumer le feux ?",
			 reponseA:"Zaho",
			 reponseB:"Renaud",
			 reponseC:"johnny hallyday",
			 reponseD:"Wiz Khalifa",
			 correct:"reponseC",
			 bonneReponse:"johnny hallyday",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			image:"http://image.noelshack.com/fichiers/2016/04/1454160223-allumer-feu-avec-amel-bent-4x16l-3kr84e.jpg"
			},
			{id:"04",
			 categorie:"Culture Géneral",
			 question:"Qui est le Président de la Russie? ",
			 reponseA:"Poutine",
			 reponseB:"Francois Hollande",
			 reponseC:"Staline",
			 reponseD:"La reponse C",
			 correct:"reponseA",
			 bonneReponse:"Poutine",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			 image:"http://image.noelshack.com/fichiers/2016/04/1454160274-russie-ukraine-vladimir-poutine-memes-internet.jpg"
			},
			{id:"05",
			 categorie:"Jeu videos",
			 question:"Qui a crée Blade and Soul",
			 reponseA:"Window",
			 reponseB:"Vincare Corp",
			 reponseC:"Ubisoft",
			 reponseD:"NcSoft",
			 correct:"reponseD",
			 bonneReponse:"Ncsoft",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://image.noelshack.com/fichiers/2016/04/1454160316-107472.jpg"
			},
			{id:"06",
			categorie:"Animateur",
			 question:"Que est le principale ennemie des Animateur ?",
			 reponseA:"les enfants",
			 reponseB:"Les Parents",
			 reponseC:"Eux même",
			 reponseD:"Personne",
			 correct:"reponseD",
			 bonneReponse:"Personne",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://image.noelshack.com/fichiers/2016/04/1454160365-animateurs.png"
			},
			{id:"07",
			 categorie:"Chanteur",
			 question:"Qui chante Morgane de toi ?",
			 reponseA:"Mika",
			 reponseB:"William Baldé",
			 reponseC:"Celine Dion",
			 reponseD:"Renaud",
			 correct:"reponseD",
			 bonneReponse:"Renaud",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			 image:"http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png"
			},
			{id:"08",
			 categorie:"Culture Géneral",
			 question:"Au Moyen-Âge, comment appelait-on les villages fortifiés ? ?",
			 reponseA:"Tour",
			 reponseB:"Bastide",
			 reponseC:"Château fort",
			 reponseD:"Rempart",
			 correct:"reponseB",
			 bonneReponse:"Bastide",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			 image:"http://image.noelshack.com/fichiers/2016/04/1454160448-chateau-fort-46500.jpg"
			}


		];

		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

		
	function cat (){
		if ($scope.numquestion < 8){
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
		}
		else{
			$scope.domaine = "";
		};
	}	
		
		
	$scope.clear = function () {
		cat();
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="sport";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

					
    };
		
		$scope.valider = function() {
			
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
				$scope.categorie1 += $scope.questions[$scope.numquestion].pointscat1;
				$scope.categorie2 += $scope.questions[$scope.numquestion].pointscat2;
				$scope.categorie3 += $scope.questions[$scope.numquestion].pointscat3;
				$scope.categorie4 += $scope.questions[$scope.numquestion].pointscat4;
			}
			
			$scope.numquestion += 1;
			cat();
			
			if ($scope.numquestion >= 8)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points ==80)
				{
					$scope.texte = "Super vous êtes trop fort !";
					$scope.image = "http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png";
				}
				else if ($scope.categorie1 == 20)
				{
					$scope.texte = "Bien joué mais c'est pas terrible !";
					$scope.image = "http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png";
				}
				else if ($scope.categorie2 == 20)
				{
					
					$scope.texte = "pas mal du tout !";
					$scope.image = "http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png";
				}
				else if ($scope.categorie3 == 20)
				{
					$scope.texte = "Bien mais sans être bien !";
					$scope.image = "http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png";
				}
				}
				else if ($scope.categorie4 == 20)
				{
					$scope.texte = "Bien mais sans être bien!";
					$scope.image = "http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png";
				}
				else if ($scope.categorie1 == 15)
				{
					$scope.texte = "VOus avez presque réussie !"
					$scope.image = "http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png";
				
				}
				
				else if ($scope.categorie2 == 15)
				{
					$scope.texte = "VOus avez presque réussie !"
					$scope.image = "http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png";
				}
				
				else if ($scope.categorie3 == 15)
				{
					$scope.texte = "VOus avez presque réussie !"
					$scope.image = "http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png";
				}
				
				else if ($scope.categorie4 == 15)
				{
					$scope.texte = "VOus avez presque réussie !"
					$scope.image = "http://image.noelshack.com/fichiers/2016/04/1454160421-vindicare.png";
				}
				
			
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
				
			}
			
			$scope.reponse = "";

		};
					
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
			
	}]);
	