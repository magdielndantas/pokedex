    const html = document.querySelector("html")

      const getStyle = (element, style) =>
      window.getComputedStyle(element).getPropertyValue(style)

      function newColor() {
        const cards = document.querySelectorAll('div.card')
        const primaryPokeType = document.querySelectorAll('span#primaryPokeType')

        for (type in primaryPokeType){
            const colorName = primaryPokeType[type].innerHTML
            const card = cards[type]

            return card.classList.add(colorName)
        }
      }

      newColor()