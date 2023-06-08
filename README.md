# guessnumber

Il s'agit d'une application mobile développé en React-Native. C'est un jeu simple consistant à choisir un nombre de deux chiffres entre 0 et 99. Ensuite l'algorithme essaie de deviner le nombre en un nombre minimal d'essaie et le jeu se termine une fois le nombre deviné. A chaque tour l'utilisateur doit préciser si le nombre qu'il à choisi est plus petit ou plus grand que celui choisi par l'algorithme. Certaines contraintes sont à prendre en compte car l'utilisateur ne peut mentir :


Si le nombre désigné par l'algorithme est inférieur à celui de l'utilisateur et que celui précise que le nombre à déviner est plus petit, le programme le détecte et envoie une popup pour préciser à l'utilisateur qu'il ne peut pas mentir.
Si le nombre désigné par l'algorithme est supérieur à celui de l'utilisateur et que celui précise que le nombre à déviner est plus grand, le programme le détecte et envoie une popup pour préciser à l'utilisateur qu'il ne peut pas mentir.