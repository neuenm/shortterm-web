import type { Locale } from "@/lib/site";

// Written content for the area pages of the main cities: what the city is like for someone looking
// for a room, its popular suburbs and how to get around. A city listed here gets its page indexed
// even before it has rooms (AREA_INDEX_MIN_ROOMS), and is linked from the home page and /rooms.
//
// Keep it durable: no prices, fares or opening hours, which go stale. The live numbers (how many
// rooms, from what price) come from the database. Each suburb slug must exist in that city
// (private.area_slug of a suburb name in the app's database), or its link leads to a 404. Checked
// on 2026-11-15 against the local database.

export type CityArea = {
  // The suburb's area slug inside this city (/rooms/<city>/<suburb>).
  suburbSlug: string;
  name: string;
  description: string;
};

export type CityContent = {
  // How people call the city, when it differs from the ABS urban area name the database uses
  // ("Gold Coast" rather than "Gold Coast - Tweed Heads").
  name: string;
  intro: string[];
  areas: CityArea[];
  gettingAround: string;
};

type CityEntry = { state: string } & Record<Locale, CityContent>;

const CITIES: Record<string, CityEntry> = {
  brisbane: {
    state: "QLD",
    en: {
      name: "Brisbane",
      intro: [
        "Brisbane is Queensland's capital: a subtropical city built along the Brisbane River, with mild winters and long, warm summers. It's one of the most popular cities in Australia for working holiday makers and students, and rooms in share houses come up all year round.",
        "Most people look for a room close to the city centre and the river, where you can get around without a car. Further out, houses tend to be bigger, with backyards and more housemates, and rooms usually cost less.",
      ],
      areas: [
        {
          suburbSlug: "west-end",
          name: "West End",
          description:
            "Across the river from the city, with cafés, live music and the Saturday markets at Davies Park. South Bank is a short walk away.",
        },
        {
          suburbSlug: "south-brisbane",
          name: "South Brisbane",
          description:
            "Next to South Bank's parklands and cultural precinct, with the city a short walk over the bridge.",
        },
        {
          suburbSlug: "fortitude-valley",
          name: "Fortitude Valley",
          description:
            "Brisbane's nightlife district, next to the city centre, with lots of apartments and a train station of its own.",
        },
        {
          suburbSlug: "new-farm",
          name: "New Farm",
          description:
            "Leafy and quieter, on a bend of the river, with New Farm Park and the Brisbane Powerhouse arts centre.",
        },
        {
          suburbSlug: "kangaroo-point",
          name: "Kangaroo Point",
          description:
            "On the peninsula facing the city, with the cliffs, river views and ferries to the centre.",
        },
        {
          suburbSlug: "st-lucia",
          name: "St Lucia",
          description:
            "Home to the University of Queensland and popular with students. The CityCat ferry and buses connect it with the city.",
        },
      ],
      gettingAround:
        "TransLink runs Brisbane's buses, trains and ferries, including the CityCat along the river. Most inner suburbs are a short bus or ferry ride from the city, and shared e-scooters and bikes are common in the inner city.",
    },
    es: {
      name: "Brisbane",
      intro: [
        "Brisbane es la capital de Queensland: una ciudad subtropical construida a lo largo del río Brisbane, con inviernos suaves y veranos largos y cálidos. Es una de las ciudades de Australia más elegidas por quienes llegan con una Working Holiday y por estudiantes, y aparecen habitaciones en casas compartidas todo el año.",
        "La mayoría busca habitación cerca del centro y del río, donde puedes moverte sin auto. Más lejos, las casas suelen ser más grandes, con patio y más compañeros de casa, y las habitaciones suelen costar menos.",
      ],
      areas: [
        {
          suburbSlug: "west-end",
          name: "West End",
          description:
            "Al otro lado del río, frente al centro, con cafés, música en vivo y el mercado de los sábados en Davies Park. South Bank queda a pocos minutos a pie.",
        },
        {
          suburbSlug: "south-brisbane",
          name: "South Brisbane",
          description:
            "Junto a los parques y el centro cultural de South Bank, con el centro a un paseo cruzando el puente.",
        },
        {
          suburbSlug: "fortitude-valley",
          name: "Fortitude Valley",
          description:
            "El barrio de la vida nocturna, pegado al centro, con muchos departamentos y su propia estación de tren.",
        },
        {
          suburbSlug: "new-farm",
          name: "New Farm",
          description:
            "Arbolado y más tranquilo, en una curva del río, con el New Farm Park y el centro de arte Brisbane Powerhouse.",
        },
        {
          suburbSlug: "kangaroo-point",
          name: "Kangaroo Point",
          description:
            "En la península frente al centro, con los acantilados, vistas al río y ferris al centro.",
        },
        {
          suburbSlug: "st-lucia",
          name: "St Lucia",
          description:
            "Donde está la University of Queensland, muy elegido por estudiantes. El ferri CityCat y los buses lo conectan con el centro.",
        },
      ],
      gettingAround:
        "TransLink opera los buses, trenes y ferris de Brisbane, incluido el CityCat que recorre el río. La mayoría de los barrios cercanos al centro están a un viaje corto en bus o ferri, y en la zona céntrica se usan mucho los monopatines y bicicletas compartidos.",
    },
  },
  sydney: {
    state: "NSW",
    en: {
      name: "Sydney",
      intro: [
        "Sydney is Australia's largest city and its busiest rental market: rooms near the beaches and in the inner city go fast. Short stays of a few weeks are common, from people arriving on a working holiday to people between leases.",
        "Prices change a lot from one suburb to the next. The eastern beaches and the inner city cost the most; suburbs further west, along the train lines, usually cost less for a similar room.",
      ],
      areas: [
        {
          suburbSlug: "bondi-beach",
          name: "Bondi Beach",
          description:
            "Australia's best-known beach and a backpacker favourite. It's busy all year, and its rooms are among the most expensive in the city.",
        },
        {
          suburbSlug: "coogee",
          name: "Coogee",
          description:
            "A beach suburb south of Bondi, a little quieter, joined to it by the Bondi to Coogee coastal walk.",
        },
        {
          suburbSlug: "surry-hills",
          name: "Surry Hills",
          description:
            "Next to Central Station, with restaurants, bars and terrace houses within walking distance of the city.",
        },
        {
          suburbSlug: "newtown",
          name: "Newtown",
          description:
            "Lively and alternative, in the inner west, close to the University of Sydney and with its own train station.",
        },
        {
          suburbSlug: "glebe",
          name: "Glebe",
          description:
            "Leafy and close to both the city and the University of Sydney, with weekend markets.",
        },
        {
          suburbSlug: "manly",
          name: "Manly",
          description:
            "A beach suburb on the northern side of the harbour, connected to Circular Quay by ferry.",
        },
        {
          suburbSlug: "parramatta",
          name: "Parramatta",
          description:
            "Sydney's second business centre, to the west, with fast trains to the city and generally lower rents.",
        },
      ],
      gettingAround:
        "Trains, buses, ferries, light rail and the metro all take the Opal card, and you can also tap on with your own contactless card or phone. The ferries from Circular Quay double as a way to see the harbour.",
    },
    es: {
      name: "Sydney",
      intro: [
        "Sydney es la ciudad más grande de Australia y la de más movimiento en alquileres: las habitaciones cerca de las playas y del centro vuelan. Las estadías de unas semanas son comunes, desde quien llega con una Working Holiday hasta quien está entre un contrato y otro.",
        "Los precios cambian mucho de un barrio a otro. Las playas del este y el centro son lo más caro; los barrios más al oeste, sobre las líneas de tren, suelen costar menos por una habitación parecida.",
      ],
      areas: [
        {
          suburbSlug: "bondi-beach",
          name: "Bondi Beach",
          description:
            "La playa más conocida de Australia y la favorita de los backpackers. Tiene movimiento todo el año, y sus habitaciones están entre las más caras de la ciudad.",
        },
        {
          suburbSlug: "coogee",
          name: "Coogee",
          description:
            "Un barrio de playa al sur de Bondi, algo más tranquilo, unido a Bondi por el sendero costero Bondi to Coogee.",
        },
        {
          suburbSlug: "surry-hills",
          name: "Surry Hills",
          description:
            "Junto a Central Station, con restaurantes, bares y casas antiguas en hilera, a pocos minutos a pie del centro.",
        },
        {
          suburbSlug: "newtown",
          name: "Newtown",
          description:
            "Animado y alternativo, en el inner west, cerca de la University of Sydney y con su propia estación de tren.",
        },
        {
          suburbSlug: "glebe",
          name: "Glebe",
          description:
            "Arbolado y cerca tanto del centro como de la University of Sydney, con mercados los fines de semana.",
        },
        {
          suburbSlug: "manly",
          name: "Manly",
          description:
            "Un barrio de playa del lado norte de la bahía, conectado con Circular Quay por ferri.",
        },
        {
          suburbSlug: "parramatta",
          name: "Parramatta",
          description:
            "El segundo centro de negocios de Sydney, al oeste, con trenes rápidos al centro y alquileres en general más bajos.",
        },
      ],
      gettingAround:
        "Trenes, buses, ferris, tranvía y metro se pagan con la tarjeta Opal, y también puedes pasar tu propia tarjeta sin contacto o el celular. Los ferris que salen de Circular Quay son además una forma de conocer la bahía.",
    },
  },
  melbourne: {
    state: "VIC",
    en: {
      name: "Melbourne",
      intro: [
        "Melbourne is known for its cafés, laneways, live music and sport, and for weather that can change several times in a day. Its inner suburbs are full of share houses, and rooms come up all year.",
        "Trams reach most inner suburbs, so many people choose a room near a tram line rather than right in the centre.",
      ],
      areas: [
        {
          suburbSlug: "st-kilda",
          name: "St Kilda",
          description:
            "By the beach on Port Phillip Bay, with a long backpacker tradition, Acland Street's cake shops and the pier.",
        },
        {
          suburbSlug: "fitzroy",
          name: "Fitzroy",
          description: "Bars, vintage shops and street art, a short tram ride from the city.",
        },
        {
          suburbSlug: "collingwood",
          name: "Collingwood",
          description: "Next to Fitzroy, with converted warehouses, breweries and a creative crowd.",
        },
        {
          suburbSlug: "carlton",
          name: "Carlton",
          description:
            "Next to the University of Melbourne, with the Italian restaurants of Lygon Street.",
        },
        {
          suburbSlug: "brunswick",
          name: "Brunswick",
          description: "North of Carlton, multicultural and lively, along Sydney Road.",
        },
        {
          suburbSlug: "richmond",
          name: "Richmond",
          description: "Close to the city and the MCG, with good train and tram connections.",
        },
        {
          suburbSlug: "footscray",
          name: "Footscray",
          description: "In the west, multicultural, with its market and generally lower rents.",
        },
      ],
      gettingAround:
        "Trams, trains and buses are all part of the Public Transport Victoria (PTV) network; check PTV for current tickets and fares. Trams are free inside the Free Tram Zone in the city centre, and the city is flat enough that many people cycle.",
    },
    es: {
      name: "Melbourne",
      intro: [
        "Melbourne es conocida por sus cafés, sus callejones, la música en vivo y el deporte, y por un clima que puede cambiar varias veces en el mismo día. Sus barrios cercanos al centro están llenos de casas compartidas, y aparecen habitaciones todo el año.",
        "El tranvía llega a la mayoría de los barrios céntricos, así que mucha gente elige una habitación cerca de una línea de tranvía más que en el centro mismo.",
      ],
      areas: [
        {
          suburbSlug: "st-kilda",
          name: "St Kilda",
          description:
            "Junto a la playa de Port Phillip Bay, con mucha tradición backpacker, las pastelerías de Acland Street y el muelle.",
        },
        {
          suburbSlug: "fitzroy",
          name: "Fitzroy",
          description: "Bares, tiendas vintage y arte callejero, a un viaje corto en tranvía del centro.",
        },
        {
          suburbSlug: "collingwood",
          name: "Collingwood",
          description: "Junto a Fitzroy, con galpones reconvertidos, cervecerías y un ambiente creativo.",
        },
        {
          suburbSlug: "carlton",
          name: "Carlton",
          description:
            "Junto a la University of Melbourne, con los restaurantes italianos de Lygon Street.",
        },
        {
          suburbSlug: "brunswick",
          name: "Brunswick",
          description: "Al norte de Carlton, multicultural y animado, a lo largo de Sydney Road.",
        },
        {
          suburbSlug: "richmond",
          name: "Richmond",
          description: "Cerca del centro y del MCG, bien conectado por tren y tranvía.",
        },
        {
          suburbSlug: "footscray",
          name: "Footscray",
          description: "Al oeste, multicultural, con su mercado y alquileres en general más bajos.",
        },
      ],
      gettingAround:
        "Tranvías, trenes y buses forman parte de la red de Public Transport Victoria (PTV); consulta en PTV los pasajes y tarifas vigentes. Dentro de la Free Tram Zone del centro el tranvía es gratis, y la ciudad es lo bastante plana como para que mucha gente se mueva en bici.",
    },
  },
  perth: {
    state: "WA",
    en: {
      name: "Perth",
      intro: [
        "Perth is the capital of Western Australia and one of the sunniest big cities in the country, with beaches along the Indian Ocean and the Swan River running through the centre. It's a long way from the other capitals, so many people who come for work stay for months.",
        "Rooms close to the river, the coast or a train line are the most sought after.",
      ],
      areas: [
        {
          suburbSlug: "fremantle",
          name: "Fremantle",
          description:
            "A port city of its own at the mouth of the Swan River, with markets, heritage buildings and a train line to Perth.",
        },
        {
          suburbSlug: "northbridge",
          name: "Northbridge",
          description:
            "Right next to the city centre, with restaurants, bars and the Perth Cultural Centre.",
        },
        {
          suburbSlug: "leederville",
          name: "Leederville",
          description:
            "Cafés, an independent cinema and a relaxed village feel, a few minutes from the city.",
        },
        {
          suburbSlug: "mount-lawley",
          name: "Mount Lawley",
          description:
            "Leafy streets and the restaurants of Beaufort Street, close to the city and to a university campus.",
        },
        {
          suburbSlug: "scarborough",
          name: "Scarborough",
          description: "A beach suburb on the coast, popular for surfing and sunsets over the ocean.",
        },
        {
          suburbSlug: "cottesloe",
          name: "Cottesloe",
          description:
            "Perth's best-known beach, quieter, on the train line between Perth and Fremantle.",
        },
      ],
      gettingAround:
        "Transperth runs Perth's trains, buses and ferries. In the city centre, the CAT buses are free.",
    },
    es: {
      name: "Perth",
      intro: [
        "Perth es la capital de Western Australia y una de las grandes ciudades más soleadas del país, con playas sobre el océano Índico y el río Swan atravesando el centro. Está lejos de las demás capitales, así que mucha gente que llega por trabajo se queda meses.",
        "Las habitaciones cerca del río, de la costa o de una línea de tren son las más buscadas.",
      ],
      areas: [
        {
          suburbSlug: "fremantle",
          name: "Fremantle",
          description:
            "Una ciudad portuaria con vida propia en la desembocadura del río Swan, con mercados, edificios históricos y tren a Perth.",
        },
        {
          suburbSlug: "northbridge",
          name: "Northbridge",
          description:
            "Pegado al centro, con restaurantes, bares y el Perth Cultural Centre.",
        },
        {
          suburbSlug: "leederville",
          name: "Leederville",
          description:
            "Cafés, un cine independiente y aire de pueblo tranquilo, a pocos minutos del centro.",
        },
        {
          suburbSlug: "mount-lawley",
          name: "Mount Lawley",
          description:
            "Calles arboladas y los restaurantes de Beaufort Street, cerca del centro y de un campus universitario.",
        },
        {
          suburbSlug: "scarborough",
          name: "Scarborough",
          description: "Un barrio de playa en la costa, muy elegido para surfear y ver el atardecer sobre el mar.",
        },
        {
          suburbSlug: "cottesloe",
          name: "Cottesloe",
          description:
            "La playa más conocida de Perth, más tranquila, sobre la línea de tren entre Perth y Fremantle.",
        },
      ],
      gettingAround:
        "Transperth opera los trenes, buses y ferris de Perth. En el centro, los buses CAT son gratis.",
    },
  },
  adelaide: {
    state: "SA",
    en: {
      name: "Adelaide",
      intro: [
        "Adelaide is the capital of South Australia: a compact, easy-going city laid out around parklands, with beaches a tram ride away and wine regions within an hour's drive.",
        "Rooms generally cost less than in Sydney or Melbourne, and the city is small enough to get around by bike or public transport.",
      ],
      areas: [
        {
          suburbSlug: "north-adelaide",
          name: "North Adelaide",
          description:
            "Across the parklands from the city, with heritage houses and the cafés of O'Connell Street.",
        },
        {
          suburbSlug: "glenelg",
          name: "Glenelg",
          description: "The best-known beach suburb, at the end of the tram line from the city.",
        },
        {
          suburbSlug: "norwood",
          name: "Norwood",
          description: "East of the city, along the shops and restaurants of The Parade.",
        },
        {
          suburbSlug: "prospect",
          name: "Prospect",
          description: "North of the city, residential and relaxed, with the cafés of Prospect Road.",
        },
        {
          suburbSlug: "henley-beach",
          name: "Henley Beach",
          description: "A beach suburb with a square full of restaurants by the jetty.",
        },
      ],
      gettingAround:
        "Adelaide Metro runs the city's buses, trains and trams. The tram connects the city centre with Glenelg.",
    },
    es: {
      name: "Adelaide",
      intro: [
        "Adelaide es la capital de South Australia: una ciudad compacta y tranquila, rodeada de parques, con playas a un viaje en tranvía y zonas de vinos a menos de una hora en auto.",
        "Las habitaciones suelen costar menos que en Sydney o Melbourne, y la ciudad es lo bastante chica como para moverte en bici o en transporte público.",
      ],
      areas: [
        {
          suburbSlug: "north-adelaide",
          name: "North Adelaide",
          description:
            "Del otro lado de los parques que rodean el centro, con casas históricas y los cafés de O'Connell Street.",
        },
        {
          suburbSlug: "glenelg",
          name: "Glenelg",
          description: "El barrio de playa más conocido, al final de la línea de tranvía que sale del centro.",
        },
        {
          suburbSlug: "norwood",
          name: "Norwood",
          description: "Al este del centro, a lo largo de las tiendas y restaurantes de The Parade.",
        },
        {
          suburbSlug: "prospect",
          name: "Prospect",
          description: "Al norte del centro, residencial y tranquilo, con los cafés de Prospect Road.",
        },
        {
          suburbSlug: "henley-beach",
          name: "Henley Beach",
          description: "Un barrio de playa con una plaza llena de restaurantes junto al muelle.",
        },
      ],
      gettingAround:
        "Adelaide Metro opera los buses, trenes y tranvías de la ciudad. El tranvía une el centro con Glenelg.",
    },
  },
  "gold-coast-tweed-heads": {
    state: "QLD",
    en: {
      name: "Gold Coast",
      intro: [
        "The Gold Coast stretches along more than 50 km of beaches south of Brisbane, from the high-rises of Surfers Paradise to quieter surf towns near the New South Wales border. Rooms near the beach are the most popular, and tourism and hospitality jobs bring people all year round.",
        "Brisbane is about an hour away by train or car, so some people live on the coast and work in the city.",
      ],
      areas: [
        {
          suburbSlug: "surfers-paradise",
          name: "Surfers Paradise",
          description:
            "The busiest part of the coast, with high-rise apartments, nightlife and the beach a block away.",
        },
        {
          suburbSlug: "broadbeach",
          name: "Broadbeach",
          description:
            "Just south of Surfers Paradise and a little calmer, with restaurants and the convention centre.",
        },
        {
          suburbSlug: "southport",
          name: "Southport",
          description:
            "The Gold Coast's business centre, near Griffith University and the Broadwater.",
        },
        {
          suburbSlug: "burleigh-heads",
          name: "Burleigh Heads",
          description:
            "A relaxed surf suburb with a headland national park and a busy café scene.",
        },
        {
          suburbSlug: "palm-beach",
          name: "Palm Beach",
          description: "South of Burleigh Heads, laid-back and close to the beach.",
        },
        {
          suburbSlug: "coolangatta",
          name: "Coolangatta",
          description: "At the southern end, next to the border and the Gold Coast Airport.",
        },
      ],
      gettingAround:
        "The G:link light rail runs along the coast through the busiest suburbs, and buses cover the rest. Trains connect the Gold Coast with Brisbane.",
    },
    es: {
      name: "Gold Coast",
      intro: [
        "La Gold Coast se extiende a lo largo de más de 50 km de playas al sur de Brisbane, desde los edificios altos de Surfers Paradise hasta pueblos surferos más tranquilos cerca del límite con New South Wales. Las habitaciones cerca de la playa son las más buscadas, y los trabajos en turismo y gastronomía atraen gente todo el año.",
        "Brisbane queda a alrededor de una hora en tren o en auto, así que hay quien vive en la costa y trabaja en la ciudad.",
      ],
      areas: [
        {
          suburbSlug: "surfers-paradise",
          name: "Surfers Paradise",
          description:
            "La zona con más movimiento de la costa, con edificios de departamentos, vida nocturna y la playa a una cuadra.",
        },
        {
          suburbSlug: "broadbeach",
          name: "Broadbeach",
          description:
            "Justo al sur de Surfers Paradise y algo más tranquilo, con restaurantes y el centro de convenciones.",
        },
        {
          suburbSlug: "southport",
          name: "Southport",
          description:
            "El centro de negocios de la Gold Coast, cerca de Griffith University y del Broadwater.",
        },
        {
          suburbSlug: "burleigh-heads",
          name: "Burleigh Heads",
          description:
            "Un barrio surfero y relajado, con un parque nacional en el cabo y muchos cafés.",
        },
        {
          suburbSlug: "palm-beach",
          name: "Palm Beach",
          description: "Al sur de Burleigh Heads, tranquilo y cerca de la playa.",
        },
        {
          suburbSlug: "coolangatta",
          name: "Coolangatta",
          description: "En el extremo sur, junto al límite con New South Wales y el aeropuerto de la Gold Coast.",
        },
      ],
      gettingAround:
        "El tranvía G:link recorre la costa por los barrios con más movimiento, y los buses cubren el resto. El tren conecta la Gold Coast con Brisbane.",
    },
  },
};

// The cities the home page and /rooms feature, in this order.
export const FEATURED_CITY_SLUGS = Object.keys(CITIES);

export function getCityContent(citySlug: string, locale: string): CityContent | null {
  const entry = CITIES[citySlug];
  if (!entry) return null;
  return entry[locale === "es" ? "es" : "en"];
}

export function getCityState(citySlug: string): string | null {
  return CITIES[citySlug]?.state ?? null;
}
