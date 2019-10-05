const EMOJIS = [
  ["😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","🥰","😗","😙","😚","☺️","🙂","🤗","🤩","🤔","🤨","😐","😑","😶","🙄","😏","😣","😥","😮","🤐","😯","😪","😫","😴","😌","😛","😜","😝","🤤","😒","😓","😔","😕","🙃","🤑","😲","☹️","🙁","😖","😞","😟","😤","😢","😭","😦","😧","😨","😩","🤯","😬","😰","😱","🥵","🥶","😳","🤪","😵","😡","😠","🤬","😷","🤒","🤕","🤢","🤮","🤧","😇","🤠","🤡","🥳","🥴","🥺","🤥","🤫","🤭","🧐","🤓","😈","👿","👹","👺","💀","👻","👽","🤖","💩","😺","😸","😹","😻","😼","😽","🙀","😿","😾"],
  ["👶","👧","🧒","👦","👩","🧑","👨","👵","🧓","👴","👲","👳‍♀️","👳‍♂️","🧕","🧔","👱‍♂️","👱‍♀️","👨‍🦰","👩‍🦰","👨‍🦱","👩‍🦱","👨‍🦲","👩‍🦲","👨‍🦳","👩‍🦳","🦸‍♀️","🦸‍♂️","🦹‍♀️","🦹‍♂️","👮‍♀️","👮‍♂️","👷‍♀️","👷‍♂️","💂‍♀️","💂‍♂️","🕵️‍♀️","🕵️‍♂️","👩‍⚕️","👨‍⚕️","👩‍🌾","👨‍🌾","👩‍🍳","👨‍🍳","👩‍🎓","👨‍🎓","👩‍🎤","👨‍🎤","👩‍🏫","👨‍🏫","👩‍🏭","👨‍🏭","👩‍💻","👨‍💻","👩‍💼","👨‍💼","👩‍🔧","👨‍🔧","👩‍🔬","👨‍🔬","👩‍🎨","👨‍🎨","👩‍🚒","👨‍🚒","👩‍✈️","👨‍✈️","👩‍🚀","👨‍🚀","👩‍⚖️","👨‍⚖️","👰","🤵","👸","🤴","🤶","🎅","🧙‍♀️","🧙‍♂️","🧝‍♀️","🧝‍♂️","🧛‍♀️","🧛‍♂️","🧟‍♀️","🧟‍♂️","🧞‍♀️","🧞‍♂️","🧜‍♀️","🧜‍♂️","🧚‍♀️","🧚‍♂️","👼","🤰","🤱","🙇‍♀️","🙇‍♂️","💁‍♀️","💁‍♂️","🙅‍♀️","🙅‍♂️","🙆‍♀️","🙆‍♂️","🙋‍♀️","🙋‍♂️","🤦‍♀️","🤦‍♂️","🤷‍♀️","🤷‍♂️","🙎‍♀️","🙎‍♂️","🙍‍♀️","🙍‍♂️","💇‍♀️","💇‍♂️","💆‍♀️","💆‍♂️","🧖‍♀️","🧖‍♂️","💅","🤳","💃","🕺","👯‍♀️","👯‍♂️","🕴","🚶‍♀️","🚶‍♂️","🏃‍♀️","🏃‍♂️","👫","👭","👬","💑","👩‍❤️‍👩","👨‍❤️‍👨","💏","👩‍❤️‍💋‍👩","👨‍❤️‍💋‍👨","👪","👨‍👩‍👧","👨‍👩‍👧‍👦","👨‍👩‍👦‍👦","👨‍👩‍👧‍👧","👩‍👩‍👦","👩‍👩‍👧","👩‍👩‍👧‍👦","👩‍👩‍👦‍👦","👩‍👩‍👧‍👧","👨‍👨‍👦","👨‍👨‍👧","👨‍👨‍👧‍👦","👨‍👨‍👦‍👦","👨‍👨‍👧‍👧","👩‍👦","👩‍👧","👩‍👧‍👦","👩‍👦‍👦","👩‍👧‍👧","👨‍👦","👨‍👧","👨‍👧‍👦","👨‍👦‍👦","👨‍👧‍👧","🤲","👐","🙌","👏","🤝","👍","👎","👊","✊","🤛","🤜","🤞","✌️","🤟","🤘","👌","👈","👉","👆","👇","☝️","✋","🤚","🖐","🖖","👋","🤙","💪","🦵","🦶","🖕","✍️","🙏","💍","💄","💋","👄","👅","👂","👃","👣","👁","👀","🧠","🦴","🦷","🗣","👤","👥"],
  ["🧥","👚","👕","👖","👔","👗","👙","👘","👠","👡","👢","👞","👟","🥾","🥿","🧦","🧤","🧣","🎩","🧢","👒","🎓","⛑","👑","👝","👛","👜","💼","🎒","👓","🕶","🥽","🥼","🌂","🧵","🧶"],
  ["👶🏻","👦🏻","👧🏻","👨🏻","👩🏻","👱🏻‍♀️","👱🏻","👴🏻","👵🏻","👲🏻","👳🏻‍♀️","👳🏻","👮🏻‍♀️","👮🏻","👷🏻‍♀️","👷🏻","💂🏻‍♀️","💂🏻","🕵🏻‍♀️","🕵🏻","👩🏻‍⚕️","👨🏻‍⚕️","👩🏻‍🌾","👨🏻‍🌾","👩🏻‍🍳","👨🏻‍🍳","👩🏻‍🎓","👨🏻‍🎓","👩🏻‍🎤","👨🏻‍🎤","👩🏻‍🏫","👨🏻‍🏫","👩🏻‍🏭","👨🏻‍🏭","👩🏻‍💻","👨🏻‍💻","👩🏻‍💼","👨🏻‍💼","👩🏻‍🔧","👨🏻‍🔧","👩🏻‍🔬","👨🏻‍🔬","👩🏻‍🎨","👨🏻‍🎨","👩🏻‍🚒","👨🏻‍🚒","👩🏻‍✈️","👨🏻‍✈️","👩🏻‍🚀","👨🏻‍🚀","👩🏻‍⚖️","👨🏻‍⚖️","🤶🏻","🎅🏻","👸🏻","🤴🏻","👰🏻","🤵🏻","👼🏻","🤰🏻","🙇🏻‍♀️","🙇🏻","💁🏻","💁🏻‍♂️","🙅🏻","🙅🏻‍♂️","🙆🏻","🙆🏻‍♂️","🙋🏻","🙋🏻‍♂️","🤦🏻‍♀️","🤦🏻‍♂️","🤷🏻‍♀️","🤷🏻‍♂️","🙎🏻","🙎🏻‍♂️","🙍🏻","🙍🏻‍♂️","💇🏻","💇🏻‍♂️","💆🏻","💆🏻‍♂️","🕴🏻","💃🏻","🕺🏻","🚶🏻‍♀️","🚶🏻","🏃🏻‍♀️","🏃🏻","🤲🏻","👐🏻","🙌🏻","👏🏻","🙏🏻","👍🏻","👎🏻","👊🏻","✊🏻","🤛🏻","🤜🏻","🤞🏻","✌🏻","🤟🏻","🤘🏻","👌🏻","👈🏻","👉🏻","👆🏻","👇🏻","☝🏻","✋🏻","🤚🏻","🖐🏻","🖖🏻","👋🏻","🤙🏻","💪🏻","🖕🏻","✍🏻","🤳🏻","💅🏻","👂🏻","👃🏻"],
  ["👶🏼","👦🏼","👧🏼","👨🏼","👩🏼","👱🏼‍♀️","👱🏼","👴🏼","👵🏼","👲🏼","👳🏼‍♀️","👳🏼","👮🏼‍♀️","👮🏼","👷🏼‍♀️","👷🏼","💂🏼‍♀️","💂🏼","🕵🏼‍♀️","🕵🏼","👩🏼‍⚕️","👨🏼‍⚕️","👩🏼‍🌾","👨🏼‍🌾","👩🏼‍🍳","👨🏼‍🍳","👩🏼‍🎓","👨🏼‍🎓","👩🏼‍🎤","👨🏼‍🎤","👩🏼‍🏫","👨🏼‍🏫","👩🏼‍🏭","👨🏼‍🏭","👩🏼‍💻","👨🏼‍💻","👩🏼‍💼","👨🏼‍💼","👩🏼‍🔧","👨🏼‍🔧","👩🏼‍🔬","👨🏼‍🔬","👩🏼‍🎨","👨🏼‍🎨","👩🏼‍🚒","👨🏼‍🚒","👩🏼‍✈️","👨🏼‍✈️","👩🏼‍🚀","👨🏼‍🚀","👩🏼‍⚖️","👨🏼‍⚖️","🤶🏼","🎅🏼","👸🏼","🤴🏼","👰🏼","🤵🏼","👼🏼","🤰🏼","🙇🏼‍♀️","🙇🏼","💁🏼","💁🏼‍♂️","🙅🏼","🙅🏼‍♂️","🙆🏼","🙆🏼‍♂️","🙋🏼","🙋🏼‍♂️","🤦🏼‍♀️","🤦🏼‍♂️","🤷🏼‍♀️","🤷🏼‍♂️","🙎🏼","🙎🏼‍♂️","🙍🏼","🙍🏼‍♂️","💇🏼","💇🏼‍♂️","💆🏼","💆🏼‍♂️","🕴🏼","💃🏼","🕺🏼","🚶🏼‍♀️","🚶🏼","🏃🏼‍♀️","🏃🏼","🤲🏼","👐🏼","🙌🏼","👏🏼","🙏🏼","👍🏼","👎🏼","👊🏼","✊🏼","🤛🏼","🤜🏼","🤞🏼","✌🏼","🤟🏼","🤘🏼","👌🏼","👈🏼","👉🏼","👆🏼","👇🏼","☝🏼","✋🏼","🤚🏼","🖐🏼","🖖🏼","👋🏼","🤙🏼","💪🏼","🖕🏼","✍🏼","🤳🏼","💅🏼","👂🏼","👃🏼"],
  ["👶🏽","👦🏽","👧🏽","👨🏽","👩🏽","👱🏽‍♀️","👱🏽","👴🏽","👵🏽","👲🏽","👳🏽‍♀️","👳🏽","👮🏽‍♀️","👮🏽","👷🏽‍♀️","👷🏽","💂🏽‍♀️","💂🏽","🕵🏽‍♀️","🕵🏽","👩🏽‍⚕️","👨🏽‍⚕️","👩🏽‍🌾","👨🏽‍🌾","👩🏽‍🍳","👨🏽‍🍳","👩🏽‍🎓","👨🏽‍🎓","👩🏽‍🎤","👨🏽‍🎤","👩🏽‍🏫","👨🏽‍🏫","👩🏽‍🏭","👨🏽‍🏭","👩🏽‍💻","👨🏽‍💻","👩🏽‍💼","👨🏽‍💼","👩🏽‍🔧","👨🏽‍🔧","👩🏽‍🔬","👨🏽‍🔬","👩🏽‍🎨","👨🏽‍🎨","👩🏽‍🚒","👨🏽‍🚒","👩🏽‍✈️","👨🏽‍✈️","👩🏽‍🚀","👨🏽‍🚀","👩🏽‍⚖️","👨🏽‍⚖️","🤶🏽","🎅🏽","👸🏽","🤴🏽","👰🏽","🤵🏽","👼🏽","🤰🏽","🙇🏽‍♀️","🙇🏽","💁🏽","💁🏽‍♂️","🙅🏽","🙅🏽‍♂️","🙆🏽","🙆🏽‍♂️","🙋🏽","🙋🏽‍♂️","🤦🏽‍♀️","🤦🏽‍♂️","🤷🏽‍♀️","🤷🏽‍♂️","🙎🏽","🙎🏽‍♂️","🙍🏽","🙍🏽‍♂️","💇🏽","💇🏽‍♂️","💆🏽","💆🏽‍♂️","🕴🏼","💃🏽","🕺🏽","🚶🏽‍♀️","🚶🏽","🏃🏽‍♀️","🏃🏽","🤲🏽","👐🏽","🙌🏽","👏🏽","🙏🏽","👍🏽","👎🏽","👊🏽","✊🏽","🤛🏽","🤜🏽","🤞🏽","✌🏽","🤟🏽","🤘🏽","👌🏽","👈🏽","👉🏽","👆🏽","👇🏽","☝🏽","✋🏽","🤚🏽","🖐🏽","🖖🏽","👋🏽","🤙🏽","💪🏽","🖕🏽","✍🏽","🤳🏽","💅🏽","👂🏽","👃🏽"],
  ["👶🏾","👦🏾","👧🏾","👨🏾","👩🏾","👱🏾‍♀️","👱🏾","👴🏾","👵🏾","👲🏾","👳🏾‍♀️","👳🏾","👮🏾‍♀️","👮🏾","👷🏾‍♀️","👷🏾","💂🏾‍♀️","💂🏾","🕵🏾‍♀️","🕵🏾","👩🏾‍⚕️","👨🏾‍⚕️","👩🏾‍🌾","👨🏾‍🌾","👩🏾‍🍳","👨🏾‍🍳","👩🏾‍🎓","👨🏾‍🎓","👩🏾‍🎤","👨🏾‍🎤","👩🏾‍🏫","👨🏾‍🏫","👩🏾‍🏭","👨🏾‍🏭","👩🏾‍💻","👨🏾‍💻","👩🏾‍💼","👨🏾‍💼","👩🏾‍🔧","👨🏾‍🔧","👩🏾‍🔬","👨🏾‍🔬","👩🏾‍🎨","👨🏾‍🎨","👩🏾‍🚒","👨🏾‍🚒","👩🏾‍✈️","👨🏾‍✈️","👩🏾‍🚀","👨🏾‍🚀","👩🏾‍⚖️","👨🏾‍⚖️","🤶🏾","🎅🏾","👸🏾","🤴🏾","👰🏾","🤵🏾","👼🏾","🤰🏾","🙇🏾‍♀️","🙇🏾","💁🏾","💁🏾‍♂️","🙅🏾","🙅🏾‍♂️","🙆🏾","🙆🏾‍♂️","🙋🏾","🙋🏾‍♂️","🤦🏾‍♀️","🤦🏾‍♂️","🤷🏾‍♀️","🤷🏾‍♂️","🙎🏾","🙎🏾‍♂️","🙍🏾","🙍🏾‍♂️","💇🏾","💇🏾‍♂️","💆🏾","💆🏾‍♂️","🕴🏾","💃🏾","🕺🏾","🚶🏾‍♀️","🚶🏾","🏃🏾‍♀️","🏃🏾","🤲🏾","👐🏾","🙌🏾","👏🏾","🙏🏾","👍🏾","👎🏾","👊🏾","✊🏾","🤛🏾","🤜🏾","🤞🏾","✌🏾","🤟🏾","🤘🏾","👌🏾","👈🏾","👉🏾","👆🏾","👇🏾","☝🏾","✋🏾","🤚🏾","🖐🏾","🖖🏾","👋🏾","🤙🏾","💪🏾","🖕🏾","✍🏾","🤳🏾","💅🏾","👂🏾","👃🏾"],
  ["👶🏿","👦🏿","👧🏿","👨🏿","👩🏿","👱🏿‍♀️","👱🏿","👴🏿","👵🏿","👲🏿","👳🏿‍♀️","👳🏿","👮🏿‍♀️","👮🏿","👷🏿‍♀️","👷🏿","💂🏿‍♀️","💂🏿","🕵🏿‍♀️","🕵🏿","👩🏿‍⚕️","👨🏿‍⚕️","👩🏿‍🌾","👨🏿‍🌾","👩🏿‍🍳","👨🏿‍🍳","👩🏿‍🎓","👨🏿‍🎓","👩🏿‍🎤","👨🏿‍🎤","👩🏿‍🏫","👨🏿‍🏫","👩🏿‍🏭","👨🏿‍🏭","👩🏿‍💻","👨🏿‍💻","👩🏿‍💼","👨🏿‍💼","👩🏿‍🔧","👨🏿‍🔧","👩🏿‍🔬","👨🏿‍🔬","👩🏿‍🎨","👨🏿‍🎨","👩🏿‍🚒","👨🏿‍🚒","👩🏿‍✈️","👨🏿‍✈️","👩🏿‍🚀","👨🏿‍🚀","👩🏿‍⚖️","👨🏿‍⚖️","🤶🏿","🎅🏿","👸🏿","🤴🏿","👰🏿","🤵🏿","👼🏿","🤰🏿","🙇🏿‍♀️","🙇🏿","💁🏿","💁🏿‍♂️","🙅🏿","🙅🏿‍♂️","🙆🏿","🙆🏿‍♂️","🙋🏿","🙋🏿‍♂️","🤦🏿‍♀️","🤦🏿‍♂️","🤷🏿‍♀️","🤷🏿‍♂️","🙎🏿","🙎🏿‍♂️","🙍🏿","🙍🏿‍♂️","💇🏿","💇🏿‍♂️","💆🏿","💆🏿‍♂️","🕴🏿","💃🏿","🕺🏿","🚶🏿‍♀️","🚶🏿","🏃🏿‍♀️","🏃🏿","🤲🏿","👐🏿","🙌🏿","👏🏿","🙏🏿","👍🏿","👎🏿","👊🏿","✊🏿","🤛🏿","🤜🏿","🤞🏿","✌🏿","🤟🏿","🤘🏿","👌🏿","👈🏿","👉🏿","👆🏿","👇🏿","☝🏿","✋🏿","🤚🏿","🖐🏿","🖖🏿","👋🏿","🤙🏿","💪🏿","🖕🏿","✍🏿","🤳🏿","💅🏿","👂🏿","👃🏿"],
  ["🐶","🐱","🐭","🐹","🐰","🦊","🦝","🐻","🐼","🦘","🦡","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🦆","🦢","🦅","🦉","🦚","🦜","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐚","🐞","🐜","🦗","🕷","🕸","🦂","🦟","🦠","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦀","🐡","🐠","🐟","🐬","🐳","🐋","🦈","🐊","🐅","🐆","🦓","🦍","🐘","🦏","🦛","🐪","🐫","🦙","🦒","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🐐","🦌","🐕","🐩","🐈","🐓","🦃","🕊","🐇","🐁","🐀","🐿","🦔","🐾","🐉","🐲","🌵","🎄","🌲","🌳","🌴","🌱","🌿","☘️","🍀","🎍","🎋","🍃","🍂","🍁","🍄","🌾","💐","🌷","🌹","🥀","🌺","🌸","🌼","🌻","🌞","🌝","🌛","🌜","🌚","🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔","🌙","🌎","🌍","🌏","💫","⭐️","🌟","✨","⚡️","☄️","💥","🔥","🌪","🌈","☀️","🌤","⛅️","🌥","☁️","🌦","🌧","⛈","🌩","🌨","❄️","☃️","⛄️","🌬","💨","💧","💦","☔️","☂️","🌊","🌫"],
  ["🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🍍","🥭","🥥","🥝","🍅","🍆","🥑","🥦","🥒","🥬","🌶","🌽","🥕","🥔","🍠","🥐","🍞","🥖","🥨","🥯","🧀","🥚","🍳","🥞","🥓","🥩","🍗","🍖","🌭","🍔","🍟","🍕","🥪","🥙","🌮","🌯","🥗","🥘","🥫","🍝","🍜","🍲","🍛","🍣","🍱","🥟","🍤","🍙","🍚","🍘","🍥","🥮","🥠","🍢","🍡","🍧","🍨","🍦","🥧","🍰","🎂","🍮","🍭","🍬","🍫","🍿","🧂","🍩","🍪","🌰","🥜","🍯","🥛","🍼","☕️","🍵","🥤","🍶","🍺","🍻","🥂","🍷","🥃","🍸","🍹","🍾","🥄","🍴","🍽","🥣","🥡","🥢"],
  ["⚽️","🏀","🏈","⚾️","🥎","🏐","🏉","🎾","🥏","🎱","🏓","🏸","🥅","🏒","🏑","🥍","🏏","⛳️","🏹","🎣","🥊","🥋","🎽","⛸","🥌","🛷","🛹","🎿","⛷","🏂","🏋️‍♀️","🏋🏻‍♀️","🏋🏼‍♀️","🏋🏽‍♀️","🏋🏾‍♀️","🏋🏿‍♀️","🏋️‍♂️","🏋🏻‍♂️","🏋🏼‍♂️","🏋🏽‍♂️","🏋🏾‍♂️","🏋🏿‍♂️","🤼‍♀️","🤼‍♂️","🤸‍♀️","🤸🏻‍♀️","🤸🏼‍♀️","🤸🏽‍♀️","🤸🏾‍♀️","🤸🏿‍♀️","🤸‍♂️","🤸🏻‍♂️","🤸🏼‍♂️","🤸🏽‍♂️","🤸🏾‍♂️","🤸🏿‍♂️","⛹️‍♀️","⛹🏻‍♀️","⛹🏼‍♀️","⛹🏽‍♀️","⛹🏾‍♀️","⛹🏿‍♀️","⛹️‍♂️","⛹🏻‍♂️","⛹🏼‍♂️","⛹🏽‍♂️","⛹🏾‍♂️","⛹🏿‍♂️","🤺","🤾‍♀️","🤾🏻‍♀️","🤾🏼‍♀️","🤾🏾‍♀️","🤾🏾‍♀️","🤾🏿‍♀️","🤾‍♂️","🤾🏻‍♂️","🤾🏼‍♂️","🤾🏽‍♂️","🤾🏾‍♂️","🤾🏿‍♂️","🏌️‍♀️","🏌🏻‍♀️","🏌🏼‍♀️","🏌🏽‍♀️","🏌🏾‍♀️","🏌🏿‍♀️","🏌️‍♂️","🏌🏻‍♂️","🏌🏼‍♂️","🏌🏽‍♂️","🏌🏾‍♂️","🏌🏿‍♂️","🏇","🏇🏻","🏇🏼","🏇🏽","🏇🏾","🏇🏿","🧘‍♀️","🧘🏻‍♀️","🧘🏼‍♀️","🧘🏽‍♀️","🧘🏾‍♀️","🧘🏿‍♀️","🧘‍♂️","🧘🏻‍♂️","🧘🏼‍♂️","🧘🏽‍♂️","🧘🏾‍♂️","🧘🏿‍♂️","🏄‍♀️","🏄🏻‍♀️","🏄🏼‍♀️","🏄🏽‍♀️","🏄🏾‍♀️","🏄🏿‍♀️","🏄‍♂️","🏄🏻‍♂️","🏄🏼‍♂️","🏄🏽‍♂️","🏄🏾‍♂️","🏄🏿‍♂️","🏊‍♀️","🏊🏻‍♀️","🏊🏼‍♀️","🏊🏽‍♀️","🏊🏾‍♀️","🏊🏿‍♀️","🏊‍♂️","🏊🏻‍♂️","🏊🏼‍♂️","🏊🏽‍♂️","🏊🏾‍♂️","🏊🏿‍♂️","🤽‍♀️","🤽🏻‍♀️","🤽🏼‍♀️","🤽🏽‍♀️","🤽🏾‍♀️","🤽🏿‍♀️","🤽‍♂️","🤽🏻‍♂️","🤽🏼‍♂️","🤽🏽‍♂️","🤽🏾‍♂️","🤽🏿‍♂️","🚣‍♀️","🚣🏻‍♀️","🚣🏼‍♀️","🚣🏽‍♀️","🚣🏾‍♀️","🚣🏿‍♀️","🚣‍♂️","🚣🏻‍♂️","🚣🏼‍♂️","🚣🏽‍♂️","🚣🏾‍♂️","🚣🏿‍♂️","🧗‍♀️","🧗🏻‍♀️","🧗🏼‍♀️","🧗🏽‍♀️","🧗🏾‍♀️","🧗🏿‍♀️","🧗‍♂️","🧗🏻‍♂️","🧗🏼‍♂️","🧗🏽‍♂️","🧗🏾‍♂️","🧗🏿‍♂️","🚵‍♀️","🚵🏻‍♀️","🚵🏼‍♀️","🚵🏽‍♀️","🚵🏾‍♀️","🚵🏿‍♀️","🚵‍♂️","🚵🏻‍♂️","🚵🏼‍♂️","🚵🏽‍♂️","🚵🏾‍♂️","🚵🏿‍♂️","🚴‍♀️","🚴🏻‍♀️","🚴🏼‍♀️","🚴🏽‍♀️","🚴🏾‍♀️","🚴🏿‍♀️","🚴‍♂️","🚴🏻‍♂️","🚴🏼‍♂️","🚴🏽‍♂️","🚴🏾‍♂️","🚴🏿‍♂️","🏆","🥇","🥈","🥉","🏅","🎖","🏵","🎗","🎫","🎟","🎪","🤹‍♀️","🤹🏻‍♀️","🤹🏼‍♀️","🤹🏽‍♀️","🤹🏾‍♀️","🤹🏿‍♀️","🤹‍♂️","🤹🏻‍♂️","🤹🏼‍♂️","🤹🏽‍♂️","🤹🏾‍♂️","🤹🏿‍♂️","🎭","🎨","🎬","🎤","🎧","🎼","🎹","🥁","🎷","🎺","🎸","🎻","🎲","🧩","♟","🎯","🎳","🎮","🎰"],
  ["⚓️","⛽️","🚧","🚦","🚥","🚏","🗺","🗿","🗽","🗼","🏰","🏯","🏟","🎡","🎢","🎠","⛲️","⛱","🏖","🏝","🏜","🌋","⛰","🏔","🗻","🏕","⛺️","🏠","🏡","🏘","🏚","🏗","🏭","🏢","🏬","🏣","🏤","🏥","🏦","🏨","🏪","🏫","🏩","💒","🏛","⛪️","🕌","🕍","🕋","⛩","🛤","🛣","🗾","🎑","🏞","🌅","🌄","🌠","🎇","🎆","🌇","🌆","🏙","🌃","🌌","🌉","🌁"],
  ["⌚️","📱","📲","💻","⌨️","🖥","🖨","🖱","🖲","🕹","🗜","💽","💾","💿","📀","📼","📷","📸","📹","🎥","📽","🎞","📞","☎️","📟","📠","📺","📻","🎙","🎚","🎛","⏱","⏲","⏰","🕰","⌛️","⏳","📡","🔋","🔌","💡","🔦","🕯","🗑","🛢","💸","💵","💴","💶","💷","💰","💳","🧾","💎","⚖️","🔧","🔨","⚒","🛠","⛏","🔩","⚙️","⛓","🔫","💣","🔪","🗡","⚔️","🛡","🚬","⚰️","⚱️","🏺","🧭","🧱","🔮","🧿","🧸","📿","💈","⚗️","🔭","🧰","🧲","🧪","🧫","🧬","🧯","🔬","🕳","💊","💉","🌡","🚽","🚰","🚿","🛁","🛀","🛀🏻","🛀🏼","🛀🏽","🛀🏾","🛀🏿","🧴","🧵","🧶","🧷","🧹","🧺","🧻","🧼","🧽","🛎","🔑","🗝","🚪","🛋","🛏","🛌","🖼","🛍","🧳","🛒","🎁","🎈","🎏","🎀","🎊","🎉","🧨","🎎","🏮","🎐","🧧","✉️","📩","📨","📧","💌","📥","📤","📦","🏷","📪","📫","📬","📭","📮","📯","📜","📃","📄","📑","📊","📈","📉","🗒","🗓","📆","📅","📇","🗃","🗳","🗄","📋","📁","📂","🗂","🗞","📰","📓","📔","📒","📕","📗","📘","📙","📚","📖","🔖","🔗","📎","🖇","📐","📏","📌","📍","✂️","🖊","🖋","✒️","🖌","🖍","📝","✏️","🔍","🔎","🔏","🔐","🔒","🔓"],
  ["❤️","🧡","💛","💚","💙","💜","🖤","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈️","♉️","♊️","♋️","♌️","♍️","♎️","♏️","♐️","♑️","♒️","♓️","🆔","⚛️","🉑","☢️","☣️","📴","📳","🈶","🈚️","🈸","🈺","🈷️","✴️","🆚","💮","🉐","㊙️","㊗️","🈴","🈵","🈹","🈲","🅰️","🅱️","🆎","🆑","🅾️","🆘","❌","⭕️","🛑","⛔️","📛","🚫","💯","💢","♨️","🚷","🚯","🚳","🚱","🔞","📵","🚭","❗️","❕","❓","❔","‼️","⁉️","🔅","🔆","〽️","⚠️","🚸","🔱","⚜️","🔰","♻️","✅","🈯️","💹","❇️","✳️","❎","🌐","💠","Ⓜ️","🌀","💤","🏧","🚾","♿️","🅿️","🈳","🈂️","🛂","🛃","🛄","🛅","🚹","🚺","🚼","🚻","🚮","🎦","📶","🈁","🔣","ℹ️","🔤","🔡","🔠","🆖","🆗","🆙","🆒","🆕","🆓","0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","🔢","#️⃣","*️⃣","⏏️","▶️","⏸","⏯","⏹","⏺","⏭","⏮","⏩","⏪","⏫","⏬","◀️","🔼","🔽","➡️","⬅️","⬆️","⬇️","↗️","↘️","↙️","↖️","↕️","↔️","↪️","↩️","⤴️","⤵️","🔀","🔁","🔂","🔄","🔃","🎵","🎶","➕","➖","➗","✖️","♾","💲","💱","™️","©️","®️","〰️","➰","➿","🔚","🔙","🔛","🔝","🔜","✔️","☑️","🔘","⚪️","⚫️","🔴","🔵","🔺","🔻","🔸","🔹","🔶","🔷","🔳","🔲","▪️","▫️","◾️","◽️","◼️","◻️","⬛️","⬜️","🔈","🔇","🔉","🔊","🔔","🔕","📣","📢","👁‍🗨","💬","💭","🗯","♠️","♣️","♥️","♦️","🃏","🎴","🀄️","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧"],
  ["🏳️","🏴","🏁","🚩","🏳️‍🌈","🏴‍☠️","🇦🇫","🇦🇽","🇦🇱","🇩🇿","🇦🇸","🇦🇩","🇦🇴","🇦🇮","🇦🇶","🇦🇬","🇦🇷","🇦🇲","🇦🇼","🇦🇺","🇦🇹","🇦🇿","🇧🇸","🇧🇭","🇧🇩","🇧🇧","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇲","🇧🇹","🇧🇴","🇧🇦","🇧🇼","🇧🇷","🇮🇴","🇻🇬","🇧🇳","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇮🇨","🇨🇻","🇧🇶","🇰🇾","🇨🇫","🇹🇩","🇨🇱","🇨🇳","🇨🇽","🇨🇨","🇨🇴","🇰🇲","🇨🇬","🇨🇩","🇨🇰","🇨🇷","🇨🇮","🇭🇷","🇨🇺","🇨🇼","🇨🇾","🇨🇿","🇩🇰","🇩🇯","🇩🇲","🇩🇴","🇪🇨","🇪🇬","🇸🇻","🇬🇶","🇪🇷","🇪🇪","🇪🇹","🇪🇺","🇫🇰","🇫🇴","🇫🇯","🇫🇮","🇫🇷","🇬🇫","🇵🇫","🇹🇫","🇬🇦","🇬🇲","🇬🇪","🇩🇪","🇬🇭","🇬🇮","🇬🇷","🇬🇱","🇬🇩","🇬🇵","🇬🇺","🇬🇹","🇬🇬","🇬🇳","🇬🇼","🇬🇾","🇭🇹","🇭🇳","🇭🇰","🇭🇺","🇮🇸","🇮🇳","🇮🇩","🇮🇷","🇮🇶","🇮🇪","🇮🇲","🇮🇱","🇮🇹","🇯🇲","🇯🇵","🎌","🇯🇪","🇯🇴","🇰🇿","🇰🇪","🇰🇮","🇽🇰","🇰🇼","🇰🇬","🇱🇦","🇱🇻","🇱🇧","🇱🇸","🇱🇷","🇱🇾","🇱🇮","🇱🇹","🇱🇺","🇲🇴","🇲🇰","🇲🇬","🇲🇼","🇲🇾","🇲🇻","🇲🇱","🇲🇹","🇲🇭","🇲🇶","🇲🇷","🇲🇺","🇾🇹","🇲🇽","🇫🇲","🇲🇩","🇲🇨","🇲🇳","🇲🇪","🇲🇸","🇲🇦","🇲🇿","🇲🇲","🇳🇦","🇳🇷","🇳🇵","🇳🇱","🇳🇨","🇳🇿","🇳🇮","🇳🇪","🇳🇬","🇳🇺","🇳🇫","🇰🇵","🇲🇵","🇳🇴","🇴🇲","🇵🇰","🇵🇼","🇵🇸","🇵🇦","🇵🇬","🇵🇾","🇵🇪","🇵🇭","🇵🇳","🇵🇱","🇵🇹","🇵🇷","🇶🇦","🇷🇪","🇷🇴","🇷🇺","🇷🇼","🇼🇸","🇸🇲","🇸🇦","🇸🇳","🇷🇸","🇸🇨","🇸🇱","🇸🇬","🇸🇽","🇸🇰","🇸🇮","🇬🇸","🇸🇧","🇸🇴","🇿🇦","🇰🇷","🇸🇸","🇪🇸","🇱🇰","🇧🇱","🇸🇭","🇰🇳","🇱🇨","🇵🇲","🇻🇨","🇸🇩","🇸🇷","🇸🇿","🇸🇪","🇨🇭","🇸🇾","🇹🇼","🇹🇯","🇹🇿","🇹🇭","🇹🇱","🇹🇬","🇹🇰","🇹🇴","🇹🇹","🇹🇳","🇹🇷","🇹🇲","🇹🇨","🇹🇻","🇻🇮","🇺🇬","🇺🇦","🇦🇪","🇬🇧","🏴󠁧󠁢󠁥󠁮󠁧󠁿","🏴󠁧󠁢󠁳󠁣󠁴󠁿","🏴󠁧󠁢󠁷󠁬󠁳󠁿","🇺🇳","🇺🇸","🇺🇾","🇺🇿","🇻🇺","🇻🇦","🇻🇪","🇻🇳","🇼🇫","🇪🇭","🇾🇪","🇿🇲","🇿🇼"],
  ["🚗","🚕","🚙","🚌","🚎","🏎","🚓","🚑","🚒","🚐","🚚","🚛","🚜","🛴","🚲","🛵","🏍","🚨","🚔","🚍","🚘","🚖","🚡","🚠","🚟","🚃","🚋","🚞","🚝","🚄","🚅","🚈","🚂","🚆","🚇","🚊","🚉","✈️","🛫","🛬","🛩","💺","🛰","🚀","🛸","🚁","🛶","⛵️","🚤","🛥","🛳","⛴","🚢"]
];

export enum EmojiType {
  Smileys = 0,
  PeopleAndFantasy = 1,
  ClothingAndAccessories = 2,
  PaleEmojis = 3,
  CreamWhiteEmojis = 4,
  ModerateBrownEmojis = 5,
  DarkBrownEmojis = 6,
  BlackEmojis = 7,
  AnimalsAndNature = 8,
  FoodAndDrink = 9,
  ActivityAndSports = 10,
  TravelAndPlaces = 11,
  Objects = 12,
  Symbols = 13,
  Flags = 14,
  Vehicles = 15,
}

export const EMOJI_TITLE_MAP = {
  [EmojiType.Smileys]: '표정',
  [EmojiType.PeopleAndFantasy]: '사람과 판타지',
  [EmojiType.ClothingAndAccessories]: '옷과 장신구',
  [EmojiType.PaleEmojis]: 'Pale',
  [EmojiType.CreamWhiteEmojis]: 'Cream White',
  [EmojiType.ModerateBrownEmojis]: 'Brown',
  [EmojiType.DarkBrownEmojis]: 'Dark Brown',
  [EmojiType.BlackEmojis]: 'Black',
  [EmojiType.AnimalsAndNature]: '동물과 자연',
  [EmojiType.FoodAndDrink]: '음식',
  [EmojiType.ActivityAndSports]: '활동과 스포츠',
  [EmojiType.TravelAndPlaces]: '여행과 장소',
  [EmojiType.Objects]: '물건',
  [EmojiType.Symbols]: '상징',
  [EmojiType.Flags]: '국기',
  [EmojiType.Vehicles] : '탈것',
};

export const getEmojisByType = (type: EmojiType): string[] => EMOJIS[type];
