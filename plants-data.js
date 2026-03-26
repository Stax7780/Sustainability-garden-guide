/**
 * Plant Link Directory
 * --------------------
 * Maps plant display names (as they appear in table cells) to info URLs.
 * Links open in a new tab. To add a plant, add a line here — no HTML editing needed.
 * To remove a link, delete or comment out the line.
 *
 * Default source: Wikipedia (stable, free, comprehensive).
 * Swap any URL for a more specific source (e.g. a nursery, extension service, PFAF).
 */
const PLANT_LINKS = {

  // ── Annual Calorie Crops ──────────────────────────────────────────────────
  'Potatoes':                   'https://en.wikipedia.org/wiki/Potato',
  'Sweet Potatoes':             'https://en.wikipedia.org/wiki/Sweet_potato',
  'Winter Squash / Pumpkin':    'https://en.wikipedia.org/wiki/Winter_squash',
  'Dry Beans':                  'https://en.wikipedia.org/wiki/Bean',
  'Dry Peas / Lentils':         'https://en.wikipedia.org/wiki/Lentil',
  'Corn (flour/dent)':          'https://en.wikipedia.org/wiki/Dent_corn',
  'Grain Amaranth':             'https://en.wikipedia.org/wiki/Amaranth_grain',
  'Sunflower (seed)':           'https://en.wikipedia.org/wiki/Sunflower',
  'Flax':                       'https://en.wikipedia.org/wiki/Flax',

  // ── Annual Protein Crops ─────────────────────────────────────────────────
  'Soybeans':                   'https://en.wikipedia.org/wiki/Soybean',
  'Peanuts':                    'https://en.wikipedia.org/wiki/Peanut',
  'Quinoa':                     'https://en.wikipedia.org/wiki/Quinoa',
  'Hemp Seed':                  'https://en.wikipedia.org/wiki/Hemp',

  // ── Leafy Greens ─────────────────────────────────────────────────────────
  'Kale':                       'https://en.wikipedia.org/wiki/Kale',
  'Spinach':                    'https://en.wikipedia.org/wiki/Spinach',
  'Swiss Chard':                'https://en.wikipedia.org/wiki/Chard',
  'Collard Greens':             'https://en.wikipedia.org/wiki/Collard_greens',
  'Lettuce':                    'https://en.wikipedia.org/wiki/Lettuce',
  'Bok Choy':                   'https://en.wikipedia.org/wiki/Bok_choy',
  'Arugula':                    'https://en.wikipedia.org/wiki/Arugula',

  // ── Root Vegetables ──────────────────────────────────────────────────────
  'Beets':                      'https://en.wikipedia.org/wiki/Beetroot',
  'Carrots':                    'https://en.wikipedia.org/wiki/Carrot',
  'Turnips':                    'https://en.wikipedia.org/wiki/Turnip',
  'Parsnips':                   'https://en.wikipedia.org/wiki/Parsnip',
  'Rutabaga':                   'https://en.wikipedia.org/wiki/Rutabaga',
  'Garlic':                     'https://en.wikipedia.org/wiki/Garlic',
  'Onions':                     'https://en.wikipedia.org/wiki/Onion',
  'Leeks':                      'https://en.wikipedia.org/wiki/Leek',

  // ── Fruiting Vegetables ──────────────────────────────────────────────────
  'Tomatoes':                   'https://en.wikipedia.org/wiki/Tomato',
  'Peppers (sweet + hot)':      'https://en.wikipedia.org/wiki/Capsicum',
  'Cucumbers':                  'https://en.wikipedia.org/wiki/Cucumber',
  'Zucchini / Summer Squash':   'https://en.wikipedia.org/wiki/Zucchini',
  'Eggplant':                   'https://en.wikipedia.org/wiki/Eggplant',
  'Peas (fresh/shell)':         'https://en.wikipedia.org/wiki/Pea',
  'Green Beans':                'https://en.wikipedia.org/wiki/Green_bean',

  // ── Brassicas ────────────────────────────────────────────────────────────
  'Broccoli':                   'https://en.wikipedia.org/wiki/Broccoli',
  'Cabbage':                    'https://en.wikipedia.org/wiki/Cabbage',
  'Brussels Sprouts':           'https://en.wikipedia.org/wiki/Brussels_sprout',
  'Cauliflower':                'https://en.wikipedia.org/wiki/Cauliflower',
  'Kohlrabi':                   'https://en.wikipedia.org/wiki/Kohlrabi',

  // ── Herbs ────────────────────────────────────────────────────────────────
  'Basil':                      'https://en.wikipedia.org/wiki/Basil',
  'Parsley':                    'https://en.wikipedia.org/wiki/Parsley',
  'Dill':                       'https://en.wikipedia.org/wiki/Dill',
  'Cilantro':                   'https://en.wikipedia.org/wiki/Coriander',
  'Calendula':                  'https://en.wikipedia.org/wiki/Calendula_officinalis',
  'Chamomile':                  'https://en.wikipedia.org/wiki/Chamomile',

  // ── Nut Trees ────────────────────────────────────────────────────────────
  'American Chestnut':          'https://en.wikipedia.org/wiki/American_chestnut',
  'Chinese Chestnut':           'https://en.wikipedia.org/wiki/Chinese_chestnut',
  'Black Walnut':               'https://en.wikipedia.org/wiki/Juglans_nigra',
  'Butternut / White Walnut':   'https://en.wikipedia.org/wiki/Juglans_cinerea',
  'Hazelnut / Filbert':         'https://en.wikipedia.org/wiki/Hazelnut',
  'Shagbark Hickory':           'https://en.wikipedia.org/wiki/Carya_ovata',
  'Pecan':                      'https://en.wikipedia.org/wiki/Pecan',
  'English / Carpathian Walnut':'https://en.wikipedia.org/wiki/Juglans_regia',
  'Honey Locust':               'https://en.wikipedia.org/wiki/Gleditsia_triacanthos',

  // ── Fruit Trees ──────────────────────────────────────────────────────────
  'Mulberry':                   'https://en.wikipedia.org/wiki/Mulberry',
  'Persimmon':                  'https://en.wikipedia.org/wiki/Persimmon',
  'Pawpaw':                     'https://en.wikipedia.org/wiki/Asimina_triloba',
  'Cornelian Cherry':           'https://en.wikipedia.org/wiki/Cornus_mas',
  'Elderberry':                 'https://en.wikipedia.org/wiki/Sambucus',
  'Apple':                      'https://en.wikipedia.org/wiki/Apple',
  'Pear':                       'https://en.wikipedia.org/wiki/Pear',
  'Plum':                       'https://en.wikipedia.org/wiki/Plum',
  'Sour Cherry':                'https://en.wikipedia.org/wiki/Prunus_cerasus',
  'Apricot':                    'https://en.wikipedia.org/wiki/Apricot',
  'Fig':                        'https://en.wikipedia.org/wiki/Common_fig',
  'Quince':                     'https://en.wikipedia.org/wiki/Quince',
  'Medlar':                     'https://en.wikipedia.org/wiki/Mespilus_germanica',

  // ── Berry Shrubs ─────────────────────────────────────────────────────────
  'Siberian Pea Shrub':         'https://en.wikipedia.org/wiki/Caragana_arborescens',
  'Sea Kale':                   'https://en.wikipedia.org/wiki/Crambe_maritima',
  'Gooseberry':                 'https://en.wikipedia.org/wiki/Gooseberry',
  'Black Currant':              'https://en.wikipedia.org/wiki/Blackcurrant',
  'Red / White Currant':        'https://en.wikipedia.org/wiki/Redcurrant',
  'Serviceberry / Juneberry':   'https://en.wikipedia.org/wiki/Amelanchier',
  'Autumn Olive':               'https://en.wikipedia.org/wiki/Elaeagnus_umbellata',
  'Sea Buckthorn':              'https://en.wikipedia.org/wiki/Sea_buckthorn',
  'Aronia / Chokeberry':        'https://en.wikipedia.org/wiki/Aronia',
  'Rugosa Rose':                'https://en.wikipedia.org/wiki/Rosa_rugosa',
  'Nanking Cherry':             'https://en.wikipedia.org/wiki/Prunus_tomentosa',
  'Goji Berry':                 'https://en.wikipedia.org/wiki/Goji',
  'Blueberry':                  'https://en.wikipedia.org/wiki/Blueberry',
  'Raspberry':                  'https://en.wikipedia.org/wiki/Raspberry',
  'Strawberries':               'https://en.wikipedia.org/wiki/Strawberry',

  // ── Perennial Vegetables ─────────────────────────────────────────────────
  'Asparagus':                  'https://en.wikipedia.org/wiki/Asparagus',
  'Rhubarb':                    'https://en.wikipedia.org/wiki/Rhubarb',
  'Jerusalem Artichoke / Sunchoke': 'https://en.wikipedia.org/wiki/Jerusalem_artichoke',
  'Good King Henry':            'https://en.wikipedia.org/wiki/Chenopodium_bonus-henricus',
  'Egyptian Walking Onions':    'https://en.wikipedia.org/wiki/Tree_onion',
  'Chives + Garlic Chives':     'https://en.wikipedia.org/wiki/Chives',
  'Chives':                     'https://en.wikipedia.org/wiki/Chives',
  'Perennial Kale / Tree Collards': 'https://en.wikipedia.org/wiki/Daubenton%27s_kale',
  'Sorrel':                     'https://en.wikipedia.org/wiki/Sorrel',
  'Lovage':                     'https://en.wikipedia.org/wiki/Lovage',
  'Horseradish':                'https://en.wikipedia.org/wiki/Horseradish',
  'Ostrich Fern (Fiddleheads)': 'https://en.wikipedia.org/wiki/Matteuccia_struthiopteris',
  'Ramps / Wild Leek':          'https://en.wikipedia.org/wiki/Allium_tricoccum',
  'Water Celery':               'https://en.wikipedia.org/wiki/Oenanthe_javanica',
  'Skirret':                    'https://en.wikipedia.org/wiki/Skirret',
  'Scorzonera':                 'https://en.wikipedia.org/wiki/Scorzonera_hispanica',
  'Globe Artichoke':            'https://en.wikipedia.org/wiki/Globe_artichoke',
  'True / Globe Artichoke':     'https://en.wikipedia.org/wiki/Globe_artichoke',
  'Yacon':                      'https://en.wikipedia.org/wiki/Yac%C3%B3n',
  'Oca':                        'https://en.wikipedia.org/wiki/Oca_(plant)',
  'Turkish Rocket':             'https://en.wikipedia.org/wiki/Bunias_orientalis',
  'Perennial Leek':             'https://en.wikipedia.org/wiki/Allium_ampeloprasum',
  'American Groundnut':         'https://en.wikipedia.org/wiki/Apios_americana',

  // ── Vines ────────────────────────────────────────────────────────────────
  'Grape':                      'https://en.wikipedia.org/wiki/Grape',
  'Hardy Kiwi':                 'https://en.wikipedia.org/wiki/Actinidia_arguta',
  'Hops':                       'https://en.wikipedia.org/wiki/Humulus_lupulus',

  // ── Ground Covers / Companions ───────────────────────────────────────────
  'White Clover':               'https://en.wikipedia.org/wiki/Trifolium_repens',
  'Red Clover':                 'https://en.wikipedia.org/wiki/Trifolium_pratense',
  'Nasturtium':                 'https://en.wikipedia.org/wiki/Nasturtium_(plant)',
  'Comfrey':                    'https://en.wikipedia.org/wiki/Comfrey',
  'Yarrow':                     'https://en.wikipedia.org/wiki/Achillea_millefolium',
  'Borage':                     'https://en.wikipedia.org/wiki/Borage',
  'Chicory':                    'https://en.wikipedia.org/wiki/Chicory',
  'Dandelion':                  'https://en.wikipedia.org/wiki/Taraxacum',
  'Horsetail':                  'https://en.wikipedia.org/wiki/Equisetum',
  'Marigold':                   'https://en.wikipedia.org/wiki/Tagetes',
  'Radishes':                   'https://en.wikipedia.org/wiki/Radish',
  'Radish':                     'https://en.wikipedia.org/wiki/Radish',

  // ── Companion Flowers / Pest Plants ──────────────────────────────────────
  'Daffodil':                   'https://en.wikipedia.org/wiki/Narcissus_(plant)',
  'Black currant':              'https://en.wikipedia.org/wiki/Blackcurrant',
  'Ostrich fern':               'https://en.wikipedia.org/wiki/Matteuccia_struthiopteris',
  'Ramps / Wild leek':          'https://en.wikipedia.org/wiki/Allium_tricoccum',
  'Chives / Garlic chives':     'https://en.wikipedia.org/wiki/Chives',
  'White clover':               'https://en.wikipedia.org/wiki/Trifolium_repens',
  'Red clover':                 'https://en.wikipedia.org/wiki/Trifolium_pratense',

  // ── Companion Herb Aliases (used in companion planting tables) ────────────
  'Lavender':                   'https://en.wikipedia.org/wiki/Lavandula',
  'Rosemary':                   'https://en.wikipedia.org/wiki/Rosemary',
  'Sage':                       'https://en.wikipedia.org/wiki/Salvia_officinalis',
  'Thyme':                      'https://en.wikipedia.org/wiki/Thyme',
  'Mint':                       'https://en.wikipedia.org/wiki/Mentha',
  'Rue':                        'https://en.wikipedia.org/wiki/Ruta_graveolens',
  'Phacelia':                   'https://en.wikipedia.org/wiki/Phacelia',
  'Sweet Alyssum':              'https://en.wikipedia.org/wiki/Lobularia_maritima',
  'Angelica':                   'https://en.wikipedia.org/wiki/Angelica',
  'Coriander':                  'https://en.wikipedia.org/wiki/Coriander',
  'Fennel':                     'https://en.wikipedia.org/wiki/Fennel',
  'Celery':                     'https://en.wikipedia.org/wiki/Celery',
  'Marjoram':                   'https://en.wikipedia.org/wiki/Marjoram',
  'Tansy':                      'https://en.wikipedia.org/wiki/Tanacetum_vulgare',

  // ── Cover Crops ──────────────────────────────────────────────────────────
  'Buckwheat':                  'https://en.wikipedia.org/wiki/Buckwheat',
  'Winter Rye':                 'https://en.wikipedia.org/wiki/Rye',
  'Crimson Clover':             'https://en.wikipedia.org/wiki/Trifolium_incarnatum',
  'Hairy Vetch':                'https://en.wikipedia.org/wiki/Vicia_villosa',
  'Oats':                       'https://en.wikipedia.org/wiki/Oat',

  // ── Animals ───────────────────────────────────────────────────────────────
  'Rabbits':                    'https://en.wikipedia.org/wiki/Domestic_rabbit',
  'Ducks':                      'https://en.wikipedia.org/wiki/Duck',
  'Honeybees':                  'https://en.wikipedia.org/wiki/Honey_bee',
  'Dairy Goat':                 'https://en.wikipedia.org/wiki/Goat',

  // ── Alternate / short name aliases ───────────────────────────────────────
  'Beans':                      'https://en.wikipedia.org/wiki/Bean',
  'Beans (dry)':                'https://en.wikipedia.org/wiki/Bean',
  'Beans (dry + fresh)':        'https://en.wikipedia.org/wiki/Bean',
  'Peas':                       'https://en.wikipedia.org/wiki/Pea',
  'Peas (fresh)':               'https://en.wikipedia.org/wiki/Pea',
  'Dry Peas':                   'https://en.wikipedia.org/wiki/Pea',
  'Squash':                     'https://en.wikipedia.org/wiki/Squash_(plant)',
  'Squash / Pumpkin':           'https://en.wikipedia.org/wiki/Winter_squash',
  'Winter Squash':              'https://en.wikipedia.org/wiki/Winter_squash',
  'Zucchini':                   'https://en.wikipedia.org/wiki/Zucchini',
  'Peppers':                    'https://en.wikipedia.org/wiki/Capsicum',
  'Corn':                       'https://en.wikipedia.org/wiki/Maize',
  'Corn (dent/flour)':          'https://en.wikipedia.org/wiki/Dent_corn',
  'Sunflower':                  'https://en.wikipedia.org/wiki/Sunflower',
  'Onion':                      'https://en.wikipedia.org/wiki/Onion',
  'Onions / Garlic':            'https://en.wikipedia.org/wiki/Onion',
  'Carrot':                     'https://en.wikipedia.org/wiki/Carrot',
  'Tomato':                     'https://en.wikipedia.org/wiki/Tomato',
  'Kale / Collards':            'https://en.wikipedia.org/wiki/Kale',
  'Hazelnut':                   'https://en.wikipedia.org/wiki/Hazelnut',
  'Chestnut':                   'https://en.wikipedia.org/wiki/Chestnut',
  'Walnut':                     'https://en.wikipedia.org/wiki/Walnut',
  'Grapes':                     'https://en.wikipedia.org/wiki/Grape',
  'Raspberries':                'https://en.wikipedia.org/wiki/Raspberry',
  'Serviceberry':               'https://en.wikipedia.org/wiki/Amelanchier',
  'Red Currant':                'https://en.wikipedia.org/wiki/Redcurrant',
  'Rugosa Rose (hips)':         'https://en.wikipedia.org/wiki/Rosa_rugosa',
  'Jerusalem Artichoke':        'https://en.wikipedia.org/wiki/Jerusalem_artichoke',
  'Perennial Kale':             'https://en.wikipedia.org/wiki/Daubenton%27s_kale',
  'Walking Onions':             'https://en.wikipedia.org/wiki/Tree_onion',
  'Ostrich Fern (fiddleheads)': 'https://en.wikipedia.org/wiki/Matteuccia_struthiopteris',
  'Apple or Pear':              'https://en.wikipedia.org/wiki/Pome',
  'Apple or Pear tree':         'https://en.wikipedia.org/wiki/Pome',
  'Chestnut or Walnut':         'https://en.wikipedia.org/wiki/Nut_(fruit)',
  'Berry shrub':                'https://en.wikipedia.org/wiki/Berry',
  'Brassicas':                  'https://en.wikipedia.org/wiki/Brassica',
  'Strawberry':                 'https://en.wikipedia.org/wiki/Strawberry',
  'Raspberry':                  'https://en.wikipedia.org/wiki/Raspberry',
  'White / Red Clover':         'https://en.wikipedia.org/wiki/Clover',

};

/**
 * Auto-Linker
 * Runs on DOMContentLoaded.
 * Pass 1 — wraps <strong> inside <td> (main crop rows).
 * Pass 2 — wraps plain <td> cells whose full text exactly matches a plant
 *           name (companion rows in guild tables, nitrogen fixer tables, etc.)
 * Both passes use a case-insensitive lookup so "White clover" matches
 * "White Clover" and similar mixed-case variations in guild cards.
 */
document.addEventListener('DOMContentLoaded', function () {

  // Build a lowercase → URL map for case-insensitive matching
  var lowerMap = {};
  Object.keys(PLANT_LINKS).forEach(function (key) {
    lowerMap[key.toLowerCase()] = { url: PLANT_LINKS[key], display: key };
  });

  function makeLink(url, title) {
    var a = document.createElement('a');
    a.href   = url;
    a.target = '_blank';
    a.rel    = 'noopener noreferrer';
    a.title  = 'Learn more about ' + title;
    return a;
  }

  // Pass 1: td > strong elements (central crop rows)
  document.querySelectorAll('td strong').forEach(function (el) {
    if (el.closest('a')) return;
    var name  = el.textContent.trim();
    var entry = lowerMap[name.toLowerCase()];
    if (!entry) return;
    var link = makeLink(entry.url, name);
    el.parentNode.insertBefore(link, el);
    link.appendChild(el);
  });

  // Pass 2: plain td cells with no strong/anchor whose entire text matches a plant name
  document.querySelectorAll('td').forEach(function (td) {
    if (td.querySelector('strong, a')) return;
    var name  = td.textContent.trim();
    var entry = lowerMap[name.toLowerCase()];
    if (!entry) return;
    var link = makeLink(entry.url, name);
    link.textContent = name;
    td.textContent   = '';
    td.appendChild(link);
  });

});
