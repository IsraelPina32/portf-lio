const $cards = document.querySelectorAll(".js-card");
const $menu = document.querySelector(".js-menu");
const sectionToggleClass = "js-section-toggle";
const $menuToggles = $menu.querySelectorAll(`.${sectionToggleClass}`);

$menu.addEventListener("click", (e) => {
  if (e.target.classList.contains(sectionToggleClass)) {
    activateCard(e.target.parentElement);
    markAsActiveMenuItem(e.target);
  }
});

function activateCard(el) {
  const socialnetwork = el.dataset.socialNetwork;

  $cards.forEach(($card) => {
    $card.classList.remove("is-active");

    if ($card.classList.value.includes(socialnetwork)) {
      $card.classList.add("is-active");
    }
  });
}

function markAsActiveMenuItem(el) {
  $menuToggles.forEach(($item) => {
    $item.classList.remove("is-active");
  });

  el.classList.add("is-active");
}
