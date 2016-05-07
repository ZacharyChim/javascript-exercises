# Collection of JavaScript Exercises

### 1. Sum

* document.getElementById();
* var.addEventListener("event", callback);

### 2. Hide images

* document.querySelectorAll("tag");
* this.attributes["data-img"].value;

### 3. checkList

* items[i].addEventListener("click", editItem);
* inputs[i].addEventListener("blur", updateItem);
* inputs[i].addEventListener("keypress", itemKeypress);
* input.focus();
* input.**setSelectionRange(0, input.value.length)**;
* this.**previousSibling**.innerHTML = this.value;
* this.**parentNode**.className = "";
* function itemKeypress(**event**) {
  if (**event.which** === 13) {
    updateItem.**call(this)**;
  }
}
