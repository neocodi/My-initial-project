
# 🌐 Plan Hebdomadaire d’Apprentissage – Programmation Web

## ✅ Semaine 1–2 : Consolider les bases

### Objectif :
Maîtriser HTML/CSS, renforcer JavaScript, créer une première mini-app.

| Jour | Activité | Durée estimée |
|------|----------|----------------|
| 1 | Lecture + Pratique HTML : structure de page (Webdeck) | 30–45 min |
| 2 | CSS : mise en page simple, couleurs, polices | 30–45 min |
| 3 | JavaScript : variables, conditions, fonctions (Devsnippets + exercices) | 45 min |
| 4 | Mini-projet : page "À propos de moi" (HTML + CSS) | 1h |
| 5 | JavaScript : DOM + événements (changer un texte au clic, etc.) | 1h |
| 6–7 | Repos ou exploration libre (YouTube, GitHub, Devsnippets) | optionnel |

---

## 🔸 Petit projet #1 : Page “À propos de moi” interactive

### Outils recommandés :
- Webdeck (édition HTML/CSS/JS)
- GitHub (stockage)
- DevSnippets (extraits de code)

### Contenu suggéré :
- Photo ou avatar
- Texte de présentation
- Liste de passions (musique, techno, cuisine…)
- Bouton “Voir mes recettes préférées” qui déclenche l’affichage via JavaScript

---

## 💻 Squelette HTML/CSS/JS du projet

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>À propos de moi</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; }
    .hidden { display: none; }
    button { margin-top: 20px; padding: 10px; }
  </style>
</head>
<body>
  <h1>Bonjour ! Je m'appelle Raphael</h1>
  <p>Je suis un passionné de cuisine, de programmation et de musique.</p>
  <p>J'étudie la programmation Web au cégep et j'aime apprendre de nouvelles technologies.</p>

  <button onclick="afficherRecettes()">Voir mes recettes préférées</button>
  <ul id="recettes" class="hidden">
    <li>Béchamel</li>
    <li>Tartare de thon</li>
    <li>Rôti de bœuf aux herbes</li>
  </ul>

  <script>
    function afficherRecettes() {
      document.getElementById("recettes").classList.toggle("hidden");
    }
  </script>
</body>
</html>
```
