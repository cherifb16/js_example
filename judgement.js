function get_achievement(points){ //définition de la fonction get_achievement avec le paramètre points
    let sum = 0;// créons la variable sum et initialisons-la à 0
    for(let i=0; i<number; i++){// maintenant nous avons une boucle for qui va parcourir notre tableau de points.
      sum += points[i];// ajoutons maintenant chaque marque à notre variable sum
    }
    if (sum>=number*100*0.8){// avec la condition if, vérifions la note de l'étudiant.
      return "A";
    }
    else if (sum>=number*100*0.6){
      return "B";
    }
    else if (sum>=number*100*0.4){
      return "C";
    }
    else {
      return "D";
    }
  }
  function get_pass_or_failure(points){// définition de la fonction get_pass_or_failure avec le paramètre 'point'.
    let judge = "Pass";// laisse créer une variable qui stocke la pass en tant que chaîne
    for(let i=0; i<number; i++){// maintenant la boucle for qui va parcourir notre tableau de points
      if(points[i]<60){// avec condition if permet de vérifier si l'étudiant a obtenu des notes égales ou inférieures à 60
        judge= "fail";// si l'étudiant a 60 ou moins, notre juge variable remplacera pass par un échec
        break;// maintenant pause
      }
    }
    return judge;// maintenant, notre fonction renverra la variable judge avec la chaîne stockée
  }
  function judgement(points){// définition de la fonction `judgement avec le paramètre `point
    let achievement = get_achievement(points);// créons maintenant un objet de type "achievement".
    let pass_or_failure =  get_pass_or_failure(points);// créons maintenant l'objet de pass_or_failure
    return `Your grade is ${achievement}!!${pass_or_failure}!!`;// retournons maintenant le diplôme et le jugement de l'étudiant. 
  }
  let points= [20,20, 20, 20, 30];// créer notre tableau de points des notes des étudiants de 5 sujets
  let number = points.length;// trouvons la longueur de notre tableau de points
  console.log(judgement(points)); // affichons maintenant le résultat dans la console avec la fonction de jugement.