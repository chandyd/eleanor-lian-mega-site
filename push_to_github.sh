#!/bin/bash

# Script per pushare il sito Eleanor Lian su GitHub
# Esegui questo script DOPO aver creato il repository su GitHub

echo "🚀 Eleanor Lian - GitHub Push Script"
echo "======================================"

# Chiedi username GitHub
read -p "Inserisci il tuo username GitHub: " GITHUB_USERNAME

# Chiedi se è un repository nuovo
read -p "Hai già creato il repository su GitHub? (s/n): " REPO_EXISTS

if [[ "$REPO_EXISTS" == "s" || "$REPO_EXISTS" == "S" ]]; then
    echo "✅ Repository già creato"
else
    echo ""
    echo "📝 Crea prima il repository su GitHub:"
    echo "1. Vai su https://github.com/new"
    echo "2. Nome: eleanor-lian-mega-site"
    echo "3. Descrizione: Complete interactive website for Eleanor Lian characters and stories"
    echo "4. Pubblico (public)"
    echo "5. NON inizializzare con README"
    echo "6. Clicca 'Create repository'"
    echo ""
    read -p "Premi INVIO quando hai creato il repository... " 
fi

# Configura Git
echo ""
echo "⚙️  Configuro Git..."
git config user.email "roby@robertocalvoproductions.com"
git config user.name "Roberto Calvo"

# Aggiungi remote
echo "🔗 Aggiungo remote GitHub..."
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$GITHUB_USERNAME/eleanor-lian-mega-site.git"

# Push
echo "📤 Faccio push del codice..."
git branch -M main
git push -u origin main

echo ""
echo "======================================"
echo "✅ CODICE PUSHATO SU GITHUB!"
echo ""
echo "🎯 Prossimi passi:"
echo "1. Vai su https://vercel.com/new"
echo "2. Clicca 'Import Git Repository'"
echo "3. Seleziona 'eleanor-lian-mega-site'"
echo "4. Clicca 'Deploy'"
echo ""
echo "🌐 Il tuo sito sarà live in 30 secondi su:"
echo "   https://eleanor-lian-mega-site.vercel.app"
echo ""
echo "💖 Condividi il link con il mondo!"