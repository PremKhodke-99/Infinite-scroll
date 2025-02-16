<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Infinite Carousel with Vanilla JS & PHP</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="carousel-container">
        <button class="carousel-btn prev">&lt;</button>
        <div class="carousel-wrapper" id="carousel">
            <?php
            $cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];

            $clonedCards = array_merge(array_slice($cards, -3), $cards, array_slice($cards, 0, 3));

            foreach ($clonedCards as $card) {
                echo "<div class='carousel-card'>$card</div>";
            }
            ?>
        </div>
        <button class="carousel-btn next">&gt;</button>
    </div>
    <script src="index.js"></script>
</body>

</html>