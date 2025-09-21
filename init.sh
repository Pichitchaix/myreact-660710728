#!/bin/bash

# โฟลเดอร์หลัก
mkdir -p bookstore/{public/images/book-covers,src/{components,pages,data,hooks,utils,styles}}

# -----------------------------
# public
# -----------------------------
for file in \
  "public/index.html" \
  "public/favicon.ico" \
  "public/images/placeholder-book.jpg" \
  "public/images/book-covers/to-kill-mockingbird.jpg" \
  "public/images/book-covers/1984.jpg" \
  "public/images/book-covers/great-gatsby.jpg"
do
  [ ! -f "bookstore/$file" ] && touch "bookstore/$file"
done

# -----------------------------
# src (root)
# -----------------------------
for file in \
  "src/index.js" \
  "src/App.jsx" \
  "src/App.css"
do
  [ ! -f "bookstore/$file" ] && touch "bookstore/$file"
done

# -----------------------------
# components
# -----------------------------
for file in \
  "BookCard.jsx" "BookCard.css" \
  "Navbar.jsx" "Navbar.css" \
  "SearchBar.jsx" "SearchBar.css" \
  "Footer.jsx" "Footer.css" \
  "LoadingSpinner.jsx" "NotFound.jsx"
do
  [ ! -f "bookstore/src/components/$file" ] && touch "bookstore/src/components/$file"
done

# -----------------------------
# pages
# -----------------------------
for file in \
  "HomePage.jsx" "HomePage.css" \
  "BookListPage.jsx" "BookListPage.css" \
  "BookDetailPage.jsx" "BookDetailPage.css" \
  "CategoryPage.jsx" "CategoryPage.css" \
  "AboutPage.jsx" "ContactPage.jsx"
do
  [ ! -f "bookstore/src/pages/$file" ] && touch "bookstore/src/pages/$file"
done

# -----------------------------
# data
# -----------------------------
for file in "booksData.js" "categoriesData.js"
do
  [ ! -f "bookstore/src/data/$file" ] && touch "bookstore/src/data/$file"
done

# -----------------------------
# hooks
# -----------------------------
for file in "useBooks.js" "useLocalStorage.js"
do
  [ ! -f "bookstore/src/hooks/$file" ] && touch "bookstore/src/hooks/$file"
done

# -----------------------------
# utils
# -----------------------------
for file in "bookHelpers.js" "constants.js"
do
  [ ! -f "bookstore/src/utils/$file" ] && touch "bookstore/src/utils/$file"
done

# -----------------------------
# styles
# -----------------------------
for file in "global.css" "variables.css"
do
  [ ! -f "bookstore/src/styles/$file" ] && touch "bookstore/src/styles/$file"
done

# -----------------------------
# root files
# -----------------------------
for file in "package.json" "package-lock.json" "README.md"
do
  [ ! -f "bookstore/$file" ] && touch "bookstore/$file"
done

