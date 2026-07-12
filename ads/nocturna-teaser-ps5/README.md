# Nocturna — Teaser produit style PS5 (Seedance 2.0 / Higgsfield)

Vidéo publicitaire de reveal cinématique pour le **Masque Nocturna Bluetooth 3D**,
générée via l'API Seedance 2.0 sur Higgsfield.

## Résultat

- **Fichier** : MP4, 1920×1080 (16:9), 10 s, audio natif (sound design whoosh + impact)
- **Vidéo** : https://d8j0ntlcm91z4.cloudfront.net/user_3G9DTa97VcPvVQkfoJcxkIZJEYc/hf_20260712_204126_1babfcf1-c10b-4ef2-82af-eea50e1a5974.mp4
- **Job Higgsfield** : `1babfcf1-c10b-4ef2-82af-eea50e1a5974`

## Direction artistique

- Studio noir minimaliste, sol légèrement réfléchissant, brume volumétrique
- Reveal progressif : silhouette → rim light bleu/violet qui monte → produit pleinement révélé
- Travelling avant lent unique, ralenti sur le reveal final, particules lumineuses
- Palette marque : bleu nuit, violet, touche dorée discrète
- Texte : « NOCTURNA — Dors mieux dès ce soir »
- End card : « -20% · CODE : NOCTURNA20 »

## Reproduire / décliner

Tous les paramètres exacts (modèle, prompt anglais, media_id de référence) sont
dans [`generation.json`](./generation.json). Pour décliner :

- **Autre coloris** : réimporter l'image variante depuis le CDN Shopify
  (`media_import_url`), remplacer `medias[0].value`, ajuster la description du
  produit dans le prompt.
- **Format vertical (TikTok/Reels)** : `aspect_ratio: "9:16"` ou utiliser
  l'outil `reframe` sur la vidéo existante.
- **4K** : `resolution: "4k"` (mode `std` requis).
