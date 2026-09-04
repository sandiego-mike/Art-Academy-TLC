
const WEEK1_LEARNING = {
  objectives: [
    "Identify all seven Elements of Art in unfamiliar artwork.",
    "Explain what each element does visually instead of only memorizing a definition.",
    "Recognize how Kandinsky uses line, shape, color, value, form, texture, and space.",
    "Create a polished Elements Matrix that demonstrates each concept."
  ],
  vocabulary: [
    ["Line","A moving point that can guide the eye, define an edge, create pattern, or imply motion."],
    ["Shape","A flat enclosed area. Shapes may be geometric, organic, positive, or negative."],
    ["Color","What we perceive from reflected light; artists think about hue, value, temperature, and intensity."],
    ["Value","How light or dark something appears, regardless of its hue."],
    ["Form","A three-dimensional object or the illusion of three-dimensional volume."],
    ["Texture","How a surface feels, or how an artist makes it look like it would feel."],
    ["Space","The area around, between, and within forms; artists use space to create depth and emphasis."]
  ],
  notices: [
    ["Follow the lines","Thin black lines shoot in different directions. Your eye keeps moving instead of settling in one place."],
    ["Compare the shapes","Precise circles and triangles sit beside irregular forms. That contrast makes the composition feel ordered and unpredictable at the same time."],
    ["Watch color temperature","Warm reds and yellows tend to advance while cooler blues can feel farther away. Kandinsky uses this push-and-pull for energy."],
    ["Find the empty space","The pale background is not nothing. It gives the busy forms room to breathe and makes them easier to notice."]
  ],
  rubric: [
    ["4 · Advanced","Seven elements are clearly demonstrated, examples are inventive, craftsmanship is excellent, and explanations show real understanding."],
    ["3 · Proficient","All seven elements are correct, complete, readable, and carefully made."],
    ["2 · Developing","Most elements are present, but some examples are unclear, incomplete, or rushed."],
    ["1 · Beginning","Several elements are missing or confused, and the page needs substantial revision."]
  ]
};

const LESSON_PACKS = {
  "2": {
    "vocab": [
      [
        "Contour",
        "A line that describes an outer edge or important interior edge."
      ],
      [
        "Blind contour",
        "Drawing while looking only at the subject, not the paper."
      ],
      [
        "Pure contour",
        "Careful edge drawing made while looking back and forth between subject and page."
      ],
      [
        "Line weight",
        "Variation in line thickness or darkness used for emphasis and depth."
      ]
    ],
    "notices": [
      [
        "Study the knuckles",
        "Dürer changes direction constantly around tendons and joints instead of simplifying the hand into a symbol."
      ],
      [
        "Look for interior lines",
        "Wrinkles and tendon lines describe structure without needing shading."
      ],
      [
        "Watch line confidence",
        "Most lines are deliberate and specific; they tell you exactly where a form turns."
      ]
    ],
    "borrow": "Slow your pencil down. Let your eye lead and your hand follow instead of drawing what you think a hand should look like.",
    "reflection": "Which part of the blind-contour process made you notice something you usually ignore?",
    "quiz": [
      [
        "What is the main purpose of blind contour?",
        "To strengthen observation and eye-hand coordination."
      ],
      [
        "Should blind contour drawings look perfect?",
        "No. Accuracy of attention matters more than a polished result."
      ],
      [
        "What can line weight communicate?",
        "Emphasis, depth, overlap, and form."
      ]
    ],
    "demo": [
      "Choose one edge and commit to it.",
      "Move your eye and pencil at the same slow speed.",
      "Record every bump, dip, and overlap you actually see.",
      "For pure contour, compare proportions before adding interior lines."
    ]
  },
  "3": {
    "vocab": [
      [
        "Negative space",
        "The empty shape around or between objects."
      ],
      [
        "Spatial relationship",
        "How one shape, angle, or distance compares with another."
      ],
      [
        "Proportion",
        "The size relationship between parts of a subject."
      ],
      [
        "Perceptual set",
        "The brain's tendency to interpret what it sees using familiar expectations."
      ]
    ],
    "notices": [
      [
        "Ignore the face",
        "Treat the portrait as connected angles and shapes rather than eyes, nose, mouth, and hair."
      ],
      [
        "Compare empty shapes",
        "The spaces beside the head and around the shoulders are as measurable as the figure itself."
      ],
      [
        "Check diagonals",
        "Picasso's simple lines depend on exact direction; a small angle error changes the whole likeness."
      ]
    ],
    "borrow": "Use negative shapes as measuring tools. If the empty shape is right, the positive shape beside it is usually closer to right too.",
    "reflection": "When you turned the drawing upright, which area surprised you most?",
    "quiz": [
      [
        "Why draw the image upside down?",
        "To reduce symbolic shortcuts and force closer observation."
      ],
      [
        "What is negative space?",
        "The empty area around and between forms."
      ],
      [
        "What should you compare instead of naming facial features?",
        "Angles, distances, shapes, and spatial relationships."
      ]
    ],
    "demo": [
      "Keep the reference upside down the entire time.",
      "Block the largest outer shape first.",
      "Compare one angle and one distance at a time.",
      "Do not rotate the page until the drawing is complete."
    ]
  },
  "4": {
    "vocab": [
      [
        "Highlight",
        "The lightest area where light hits most directly."
      ],
      [
        "Core shadow",
        "The darkest turning shadow on a rounded form."
      ],
      [
        "Reflected light",
        "Light bouncing back into the shadow side from nearby surfaces."
      ],
      [
        "Cast shadow",
        "The shadow an object throws onto another surface."
      ]
    ],
    "notices": [
      [
        "Find the light source",
        "Caravaggio's beam of light enters from one direction and organizes the whole scene."
      ],
      [
        "Compare extremes",
        "Very dark darks make the lit faces and hands appear dramatically brighter."
      ],
      [
        "Notice shadow shapes",
        "The shadows are designed shapes, not random gray smudges."
      ]
    ],
    "borrow": "Before shading details, decide exactly where the light is coming from and group the subject into light family and shadow family.",
    "reflection": "Which lighting zone was hardest to separate from the others, and why?",
    "quiz": [
      [
        "Where is the core shadow?",
        "On the turning side of a rounded form, away from the direct light."
      ],
      [
        "Why preserve highlights?",
        "They establish the brightest point and help the form feel luminous."
      ],
      [
        "What creates a cast shadow?",
        "An object blocking light from reaching another surface."
      ]
    ],
    "demo": [
      "Set one clear light direction.",
      "Build a nine-step scale without skipping middle values.",
      "Map light and shadow families on the sphere.",
      "Darken the core and cast shadows while keeping reflected light visible."
    ]
  },
  "5": {
    "vocab": [
      [
        "Sighting",
        "Using a pencil or tool at arm's length to compare size and angle."
      ],
      [
        "Comparative measurement",
        "Measuring one part relative to another rather than using inches."
      ],
      [
        "Ellipse",
        "A circle seen in perspective, such as the rim of a mug."
      ],
      [
        "Overlap",
        "One form covering part of another, establishing depth order."
      ]
    ],
    "notices": [
      [
        "Compare widths and heights",
        "Cézanne constantly balances object size against neighboring objects."
      ],
      [
        "Watch the ellipses",
        "Bowls and fruit sit in a believable tabletop space because curves share consistent perspective."
      ],
      [
        "See the corrections",
        "Cézanne often revised contours; accuracy develops through adjustment rather than one perfect line."
      ]
    ],
    "borrow": "Make correction a normal part of drawing. Measure, mark, compare, adjust—then refine.",
    "reflection": "Which measurement changed your drawing the most after you checked it?",
    "quiz": [
      [
        "Why hold the pencil at arm's length?",
        "To keep the measuring distance consistent."
      ],
      [
        "What does overlap tell the viewer?",
        "Which object is in front and which is behind."
      ],
      [
        "What happens to a circular rim when viewed at an angle?",
        "It appears as an ellipse."
      ]
    ],
    "demo": [
      "Choose one dimension as your unit.",
      "Compare every major width and height to that unit.",
      "Check angles against true vertical or horizontal.",
      "Correct the large relationships before drawing details."
    ]
  },
  "6": {
    "vocab": [
      [
        "Thumbnail",
        "A very small planning sketch used to test composition."
      ],
      [
        "Focal point",
        "The area designed to attract attention first."
      ],
      [
        "Negative space",
        "The shapes of empty area around objects."
      ],
      [
        "Composition",
        "The arrangement of visual elements within the picture area."
      ]
    ],
    "notices": [
      [
        "Notice quiet spacing",
        "Morandi makes tiny gaps between bottles matter."
      ],
      [
        "Compare heights",
        "Small height changes create rhythm across otherwise simple objects."
      ],
      [
        "Look at the background",
        "The muted ground keeps attention on relationships instead of decoration."
      ]
    ],
    "borrow": "Treat spacing as seriously as objects. Before rendering, make the arrangement feel intentional in silhouette.",
    "reflection": "Why did you choose your final thumbnail over the other two?",
    "quiz": [
      [
        "What is a thumbnail for?",
        "Testing composition quickly before committing to a final drawing."
      ],
      [
        "What is a focal point?",
        "The area intended to receive the most attention."
      ],
      [
        "Why plan negative space?",
        "Because empty shapes strongly affect balance and readability."
      ]
    ],
    "demo": [
      "Make three thumbnails with different overlaps.",
      "Choose the strongest balance of large, medium, and small shapes.",
      "Transfer only the big contour masses.",
      "Check proportion before any shading begins."
    ]
  },
  "7": {
    "vocab": [
      [
        "Value range",
        "The span from the lightest light to the darkest dark."
      ],
      [
        "Edge",
        "The visual boundary between shapes or value areas."
      ],
      [
        "Hard edge",
        "A sharp, abrupt transition."
      ],
      [
        "Soft edge",
        "A gradual transition that appears less defined."
      ]
    ],
    "notices": [
      [
        "Compare materials",
        "Chardin changes edge sharpness and highlight behavior from glass to metal to cloth."
      ],
      [
        "Find the darkest accents",
        "Small dark notes anchor the composition."
      ],
      [
        "Watch soft transitions",
        "Rounded fruit and vessels turn gradually through middle values."
      ]
    ],
    "borrow": "Use edges to describe material: crisp for glass or metal highlights, softer for cloth folds and rounded fruit.",
    "reflection": "Which material became most convincing once you changed its edge quality?",
    "quiz": [
      [
        "What does a wide value range do?",
        "Creates stronger volume and visual contrast."
      ],
      [
        "What makes an edge hard?",
        "A fast, sharp change from one value or shape to another."
      ],
      [
        "Why vary edges?",
        "To describe material, depth, and focal emphasis."
      ]
    ],
    "demo": [
      "Group the still life into three big value families.",
      "Place the darkest accents early.",
      "Layer middle values slowly.",
      "Refine edge softness according to material and focus."
    ]
  },
  "8": {
    "vocab": [
      [
        "Describe",
        "State only what is visibly present."
      ],
      [
        "Analyze",
        "Explain how visual elements and principles are organized."
      ],
      [
        "Interpret",
        "Propose meaning using evidence."
      ],
      [
        "Judge",
        "Evaluate effectiveness using clear criteria and evidence."
      ]
    ],
    "notices": [
      [
        "Follow the sight lines",
        "Velázquez makes figures look at different people, creating an invisible network across the room."
      ],
      [
        "Find the mirror",
        "The tiny reflection changes how we understand the space and who may be standing outside the picture."
      ],
      [
        "Notice the painter",
        "Velázquez includes himself, turning the work into a statement about art and status."
      ]
    ],
    "borrow": "Separate observation from interpretation. First say what you can prove visually; only then explain what it might mean.",
    "reflection": "Which critique stage was easiest for you, and which required the most evidence?",
    "quiz": [
      [
        "What belongs in Describe?",
        "Only visible facts."
      ],
      [
        "What belongs in Analyze?",
        "How elements and principles organize the artwork."
      ],
      [
        "What makes a judgment strong?",
        "A clear criterion supported by visual evidence."
      ]
    ],
    "demo": [
      "Photograph your finished work before critiquing.",
      "Write visible facts without opinions.",
      "Analyze at least three elements or principles.",
      "Interpret and judge only after evidence has been established."
    ]
  },
  "9": {
    "vocab": [
      [
        "Curation",
        "Selecting and arranging work for a specific purpose."
      ],
      [
        "Documentation",
        "Accurate recording of artwork through photographs and information."
      ],
      [
        "Reflection",
        "Thoughtful evaluation of process, growth, and next steps."
      ],
      [
        "Body of work",
        "A group of works considered together over time."
      ]
    ],
    "notices": [
      [
        "Think in series",
        "Bourgeois repeated themes and forms across decades rather than chasing one isolated masterpiece."
      ],
      [
        "Notice personal symbols",
        "Objects often connect to memory, family, fear, and identity."
      ],
      [
        "See scale as meaning",
        "Maman's enormous size changes how an everyday spider feels."
      ]
    ],
    "borrow": "When choosing portfolio work, select pieces that tell a growth story rather than only the prettiest results.",
    "reflection": "What is one visible difference between your Week 1 work and your Week 8 work?",
    "quiz": [
      [
        "What does curation mean?",
        "Selecting and arranging work intentionally."
      ],
      [
        "Why save process work?",
        "It provides evidence of growth and problem solving."
      ],
      [
        "What makes a useful reflection?",
        "Specific evidence plus a clear next goal."
      ]
    ],
    "demo": [
      "Photograph in even indirect light.",
      "Crop and straighten without decorative filters.",
      "Select work showing different skills.",
      "Order the quarter so a viewer can see growth."
    ]
  },
  "10": {
    "vocab": [
      [
        "Horizon line",
        "The viewer's eye level in a perspective drawing."
      ],
      [
        "Vanishing point",
        "A point where parallel receding lines appear to meet."
      ],
      [
        "Orthogonal",
        "A line that recedes toward a vanishing point."
      ],
      [
        "One-point perspective",
        "A system using one primary vanishing point for depth."
      ]
    ],
    "notices": [
      [
        "Locate eye level",
        "Perspective begins with where the viewer is positioned."
      ],
      [
        "Follow receding edges",
        "Edges facing into depth converge while front-facing horizontals remain horizontal."
      ],
      [
        "Compare above and below",
        "You see undersides above eye level and tops of forms below eye level."
      ]
    ],
    "borrow": "Always establish eye level before building objects. The viewer's position controls what surfaces can be seen.",
    "reflection": "How does moving a cube above or below the horizon change which planes are visible?",
    "quiz": [
      [
        "What does the horizon line represent?",
        "The viewer's eye level."
      ],
      [
        "Where do orthogonals go?",
        "Toward the vanishing point."
      ],
      [
        "In one-point perspective, which edges usually stay horizontal/vertical?",
        "Front-facing horizontal and vertical edges."
      ]
    ],
    "demo": [
      "Draw the horizon and one vanishing point.",
      "Place front faces first.",
      "Connect receding corners to the vanishing point.",
      "Trim depth and erase unnecessary guides."
    ]
  },
  "11": {
    "vocab": [
      [
        "Repetition",
        "Recurring visual units that create rhythm and structure."
      ],
      [
        "Scale diminution",
        "Objects appearing smaller as distance increases."
      ],
      [
        "Receding plane",
        "A surface moving away from the viewer."
      ],
      [
        "Depth cue",
        "Any visual clue that suggests three-dimensional space."
      ]
    ],
    "notices": [
      [
        "Watch window spacing",
        "Repeated windows compress as they move away."
      ],
      [
        "Check sidewalk divisions",
        "Intervals become smaller toward the vanishing point."
      ],
      [
        "Use a foreground anchor",
        "A nearby object makes distant scale easier to read."
      ]
    ],
    "borrow": "Repeat details in perspective; decreasing spacing is one of the fastest ways to make a street feel deep.",
    "reflection": "Which repeated feature made your streetscape feel most convincing?",
    "quiz": [
      [
        "Why do repeated objects get closer together in the distance?",
        "Perspective compresses apparent spacing."
      ],
      [
        "What is scale diminution?",
        "Apparent size decreasing with distance."
      ],
      [
        "What is a depth cue?",
        "A visual clue that suggests spatial distance."
      ]
    ],
    "demo": [
      "Block building masses before windows.",
      "Set sidewalks and roofs to the same vanishing point.",
      "Repeat windows with shrinking intervals.",
      "Add one foreground object for scale."
    ]
  },
  "12": {
    "vocab": [
      [
        "Surrealism",
        "An art movement exploring dreams, unconscious thought, and unexpected combinations."
      ],
      [
        "Juxtaposition",
        "Placing unlike things together for contrast or new meaning."
      ],
      [
        "Scale shift",
        "Making an object unexpectedly large or small."
      ],
      [
        "Symbol",
        "An image or object that carries an additional meaning."
      ]
    ],
    "notices": [
      [
        "Ordinary + impossible",
        "Magritte paints familiar things realistically, then changes one relationship."
      ],
      [
        "Keep the lighting believable",
        "Realistic rendering makes the impossible event feel more unsettling."
      ],
      [
        "Ask what the object means",
        "Simple objects often work as symbols rather than decoration."
      ]
    ],
    "borrow": "Change one rule of reality at a time—scale, gravity, material, or location—while keeping the perspective believable.",
    "reflection": "What does your strangest surreal choice symbolize, and why did you place it where you did?",
    "quiz": [
      [
        "What is juxtaposition?",
        "Placing unlike things together."
      ],
      [
        "Why keep realistic perspective in surreal art?",
        "It makes impossible ideas feel more believable."
      ],
      [
        "What is a symbol?",
        "A visual form that carries additional meaning."
      ]
    ],
    "demo": [
      "Build the room accurately first.",
      "Choose three reality rules to break.",
      "Give each surreal change a reason.",
      "Keep shadows, scale cues, and perspective consistent."
    ]
  },
  "13": {
    "vocab": [
      [
        "Two-point perspective",
        "A system using two vanishing points for receding planes."
      ],
      [
        "Corner view",
        "A view where the nearest vertical edge separates two receding sides."
      ],
      [
        "Convergence",
        "The apparent meeting of parallel receding edges."
      ],
      [
        "Distortion",
        "Unnatural stretching caused by vanishing points placed too close."
      ]
    ],
    "notices": [
      [
        "Find the vertical anchor",
        "Corner edges remain vertical while left and right faces recede."
      ],
      [
        "Track two systems",
        "Every horizontal edge belongs to either the left or right vanishing point."
      ],
      [
        "Avoid extreme stretching",
        "Wide vanishing-point spacing gives more natural proportions."
      ]
    ],
    "borrow": "Before drawing details, decide whether each edge belongs to the left system, right system, or stays vertical.",
    "reflection": "Which perspective errors appeared when your vanishing points were too close together?",
    "quiz": [
      [
        "How many vanishing points define two-point perspective?",
        "Two."
      ],
      [
        "What usually stays vertical?",
        "The upright corner edges."
      ],
      [
        "Why place vanishing points far apart?",
        "To reduce extreme distortion."
      ]
    ],
    "demo": [
      "Place horizon and two distant vanishing points.",
      "Draw the nearest vertical corner.",
      "Send top and bottom edges to both points.",
      "Add details only after the big box reads correctly."
    ]
  },
  "14": {
    "vocab": [
      [
        "Mass",
        "A large simplified three-dimensional volume."
      ],
      [
        "Subdivision",
        "Breaking a large form into smaller measured sections."
      ],
      [
        "Module",
        "A repeated unit such as a window bay or column spacing."
      ],
      [
        "Structural drawing",
        "A simplified framework showing major forms before detail."
      ]
    ],
    "notices": [
      [
        "Reduce complexity",
        "Brunelleschi's dome can be understood first as big geometric masses."
      ],
      [
        "Find repeated bays",
        "Architecture often uses modules that can be measured and repeated."
      ],
      [
        "Separate structure from ornament",
        "Decoration works only after the underlying form is convincing."
      ]
    ],
    "borrow": "Translate a complicated building into boxes, cylinders, arches, and repeated modules before drawing ornament.",
    "reflection": "Which large geometric form helped you simplify your chosen landmark?",
    "quiz": [
      [
        "What is subdivision?",
        "Breaking a large form into smaller measured parts."
      ],
      [
        "What is a module?",
        "A repeated structural or design unit."
      ],
      [
        "Why delay ornament?",
        "Details cannot fix incorrect large structure."
      ]
    ],
    "demo": [
      "Identify the horizon and two main vanishing directions.",
      "Block the building as large masses.",
      "Subdivide repeated bays or floors.",
      "Check perspective before decorative detail."
    ]
  },
  "15": {
    "vocab": [
      [
        "Line hierarchy",
        "Using different line strengths to organize importance and depth."
      ],
      [
        "Surface texture",
        "Visual marks suggesting a material's physical character."
      ],
      [
        "Pattern",
        "A repeated visual motif or unit."
      ],
      [
        "Material cue",
        "A mark or feature that helps identify a surface as brick, glass, stone, etc."
      ]
    ],
    "notices": [
      [
        "Study density",
        "Piranesi packs some areas with marks while leaving others quieter."
      ],
      [
        "Follow form",
        "Brick and stone lines wrap around perspective planes."
      ],
      [
        "Use atmospheric detail",
        "Farther architecture often receives lighter, less dense linework."
      ]
    ],
    "borrow": "Texture should follow the form and perspective of the surface—not sit on top like wallpaper.",
    "reflection": "Which texture best matched the material you were trying to describe?",
    "quiz": [
      [
        "What is line hierarchy?",
        "Varying line strength to organize focus and depth."
      ],
      [
        "Should brick lines ignore perspective?",
        "No; they must recede with the surface."
      ],
      [
        "Why reduce distant detail?",
        "To support atmospheric depth and hierarchy."
      ]
    ],
    "demo": [
      "Test textures separately before the final drawing.",
      "Ink major contours first.",
      "Add texture following perspective direction.",
      "Reserve strongest linework for the focal area."
    ]
  },
  "16": {
    "vocab": [
      [
        "Hatching",
        "Parallel lines used to create tone."
      ],
      [
        "Cross-hatching",
        "Layered sets of lines crossing at angles to darken value."
      ],
      [
        "Line density",
        "How closely lines are spaced."
      ],
      [
        "Directional shading",
        "Lines that follow the surface direction of a form."
      ]
    ],
    "notices": [
      [
        "Count layers",
        "Rembrandt darkens areas by adding line layers, not by scribbling."
      ],
      [
        "Follow curvature",
        "Hatching often bends with cheeks, cloth, or architectural planes."
      ],
      [
        "Keep paper as light",
        "Highlights are created by leaving paper untouched."
      ]
    ],
    "borrow": "Make darker values through controlled spacing and layered directions instead of random pressure.",
    "reflection": "Did line spacing or number of layers give you better control over value?",
    "quiz": [
      [
        "What is hatching?",
        "Parallel lines creating tone."
      ],
      [
        "How is cross-hatching darker?",
        "Additional crossing line layers increase density."
      ],
      [
        "How do you make a highlight in ink?",
        "Leave the paper unmarked."
      ]
    ],
    "demo": [
      "Make a five-step hatch scale.",
      "Control value first with spacing.",
      "Add cross directions only as values darken.",
      "Apply the same system to the building's shadow planes."
    ]
  },
  "17": {
    "vocab": [
      [
        "Focal point",
        "The area receiving strongest visual attention."
      ],
      [
        "Orthogonal",
        "A receding line aimed toward a vanishing point."
      ],
      [
        "Hierarchy",
        "A deliberate order of visual importance."
      ],
      [
        "Spatial organization",
        "How foreground, middle ground, and background are arranged."
      ]
    ],
    "notices": [
      [
        "Find the center",
        "Raphael places the key philosophers at the convergence of architecture and gesture."
      ],
      [
        "Trace the floor",
        "Floor and ceiling lines reinforce one spatial system."
      ],
      [
        "Notice figure scale",
        "Foreground figures appear larger while distant groups compress."
      ]
    ],
    "borrow": "Use perspective not just for realism but to make the viewer look where you want.",
    "reflection": "How does Raphael make Plato and Aristotle important before you even know who they are?",
    "quiz": [
      [
        "Where is the primary vanishing point?",
        "Near the central figures of Plato and Aristotle."
      ],
      [
        "What is hierarchy?",
        "An order of visual importance."
      ],
      [
        "How can perspective support a focal point?",
        "By directing converging lines toward it."
      ]
    ],
    "demo": [
      "Locate the horizon and vanishing point.",
      "Trace five implied orthogonals.",
      "Map foreground, middle, and background groups.",
      "Explain how spatial structure creates hierarchy."
    ]
  },
  "18": {
    "vocab": [
      [
        "Process evidence",
        "Sketches, tests, and revisions showing how final work developed."
      ],
      [
        "Self-assessment",
        "Evaluation of one's own work using criteria."
      ],
      [
        "Presentation quality",
        "How clearly and professionally artwork is documented."
      ],
      [
        "Technical growth",
        "Measurable improvement in skill and control."
      ]
    ],
    "notices": [
      [
        "Compare early and late",
        "Place practice sheets beside the final landmark to make improvement visible."
      ],
      [
        "Show decisions",
        "Texture tests and construction lines reveal thinking."
      ],
      [
        "Edit intentionally",
        "One strong process example can say more than ten repetitive pages."
      ]
    ],
    "borrow": "A portfolio should show how you solved problems, not only that you finished.",
    "reflection": "Which perspective skill improved most during Quarter 2?",
    "quiz": [
      [
        "What is process evidence?",
        "Work showing development before the final piece."
      ],
      [
        "Why include self-assessment?",
        "To identify specific strengths and next steps."
      ],
      [
        "What makes documentation professional?",
        "Clear, straight, evenly lit images and consistent labels."
      ]
    ],
    "demo": [
      "Finalize and clean the landmark.",
      "Photograph or scan straight-on.",
      "Pair final work with one process study.",
      "Write a specific reflection using visual evidence."
    ]
  },
  "19": {
    "vocab": [
      [
        "Primary color",
        "A starting hue used to mix other colors in a traditional pigment system."
      ],
      [
        "Secondary color",
        "A color mixed from two primaries."
      ],
      [
        "Tertiary color",
        "A color mixed between a primary and neighboring secondary."
      ],
      [
        "Complement",
        "A hue positioned opposite another on the color wheel."
      ]
    ],
    "notices": [
      [
        "See relationships",
        "Itten's wheel is valuable because position shows color relationships at a glance."
      ],
      [
        "Compare mixtures",
        "The quality of secondaries depends on the exact red, yellow, and blue pigments used."
      ],
      [
        "Watch balance",
        "Even spacing makes complements and triads easy to identify."
      ]
    ],
    "borrow": "Mix your own secondaries so you learn how pigments behave instead of memorizing names.",
    "reflection": "Which secondary was hardest to mix cleanly, and what caused the problem?",
    "quiz": [
      [
        "What are the three traditional pigment primaries?",
        "Red, yellow, and blue."
      ],
      [
        "What is a tertiary color?",
        "A mixture between a primary and adjacent secondary."
      ],
      [
        "Where are complements on the wheel?",
        "Opposite each other."
      ]
    ],
    "demo": [
      "Place primaries evenly around the wheel.",
      "Mix and place secondaries between them.",
      "Mix six tertiary transitions.",
      "Label complements only after the wheel is complete."
    ]
  },
  "20": {
    "vocab": [
      [
        "Tint",
        "A hue made lighter, traditionally by adding white or more paper/water effect."
      ],
      [
        "Shade",
        "A hue made darker by adding black or a dark neutral."
      ],
      [
        "Tone",
        "A hue made less intense by adding gray or its complement."
      ],
      [
        "Intensity",
        "The purity or saturation strength of a color."
      ]
    ],
    "notices": [
      [
        "Compare subtle shifts",
        "Rothko builds emotion through small value and intensity changes, not detailed imagery."
      ],
      [
        "Look at edges",
        "Color fields often have soft, breathing boundaries."
      ],
      [
        "Notice scale",
        "Large areas of color affect the viewer differently than tiny swatches."
      ]
    ],
    "borrow": "Treat color variation as expressive. A muted tone and a bright pure hue can feel emotionally different even when they share the same base color.",
    "reflection": "Which change altered the emotional feeling most: tint, shade, or tone?",
    "quiz": [
      [
        "What makes a tint?",
        "Lightening a hue."
      ],
      [
        "What makes a shade?",
        "Darkening a hue."
      ],
      [
        "How does a tone differ?",
        "It reduces intensity rather than only changing lightness."
      ]
    ],
    "demo": [
      "Choose one clean base hue.",
      "Create a controlled tint ladder.",
      "Create a shade ladder.",
      "Create muted tones with small amounts of complement."
    ]
  },
  "21": {
    "vocab": [
      [
        "Monochromatic",
        "A scheme built from one hue plus its value/intensity variations."
      ],
      [
        "Analogous",
        "Colors adjacent on the color wheel."
      ],
      [
        "Complementary",
        "Colors opposite each other on the wheel."
      ],
      [
        "Triadic",
        "Three hues spaced roughly evenly around the color wheel."
      ]
    ],
    "notices": [
      [
        "Color over realism",
        "Matisse often chooses emotional color rather than literal local color."
      ],
      [
        "Compare warm/cool balance",
        "Neighboring warm and cool colors can create energy without detailed modeling."
      ],
      [
        "Simplify shapes",
        "Strong color works because the underlying shapes remain readable."
      ]
    ],
    "borrow": "Keep the composition constant while changing palette; then you can actually feel what the color relationship changes.",
    "reflection": "Which harmony changed the landscape's mood most dramatically?",
    "quiz": [
      [
        "What is analogous color?",
        "Colors beside each other on the wheel."
      ],
      [
        "What is complementary color?",
        "Opposite hues."
      ],
      [
        "Why repeat the same landscape four times?",
        "To isolate the effect of palette changes."
      ]
    ],
    "demo": [
      "Repeat one simple composition four times.",
      "Assign one harmony to each version.",
      "Limit colors strictly to that scheme.",
      "Compare mood only after all four are finished."
    ]
  },
  "22": {
    "vocab": [
      [
        "Monochrome",
        "An artwork dominated by one hue family."
      ],
      [
        "Local color",
        "The expected real-world color of an object."
      ],
      [
        "Expressive color",
        "Color chosen for emotion rather than realism."
      ],
      [
        "Value structure",
        "The pattern of lights and darks supporting readability."
      ]
    ],
    "notices": [
      [
        "See the blue family",
        "Picasso's Blue Period uses many blue values rather than one flat blue."
      ],
      [
        "Connect palette to subject",
        "The narrow cool palette supports themes of isolation and hardship."
      ],
      [
        "Value still matters",
        "Even monochromatic work needs clear light-dark structure."
      ]
    ],
    "borrow": "Choose your dominant hue for a reason, then use value changes to keep the subject readable.",
    "reflection": "What emotion did your hue communicate before the viewer even understood the subject?",
    "quiz": [
      [
        "Does monochromatic mean one exact color only?",
        "No; it includes tints, tones, and shades of one hue family."
      ],
      [
        "What is expressive color?",
        "Color chosen for emotional effect."
      ],
      [
        "Why is value important in monochrome?",
        "It creates form, focus, and readability."
      ]
    ],
    "demo": [
      "Name the emotion first.",
      "Choose one hue family intentionally.",
      "Map seven or more values.",
      "Refine the focal area while keeping the palette unified."
    ]
  },
  "23": {
    "vocab": [
      [
        "Wet-on-wet",
        "Applying paint onto damp paper for soft spreading edges."
      ],
      [
        "Wet-on-dry",
        "Applying paint to dry paper for controlled edges."
      ],
      [
        "Lifting",
        "Removing pigment with water or absorbent material."
      ],
      [
        "Dry brush",
        "Using relatively little water so brush texture catches the paper surface."
      ]
    ],
    "notices": [
      [
        "Watch water control",
        "Turner's softness comes from controlling moisture, not from randomly flooding the page."
      ],
      [
        "Preserve light",
        "Transparent watercolor depends on the paper itself for luminosity."
      ],
      [
        "Layer atmosphere",
        "Multiple transparent passages create depth without opaque covering."
      ]
    ],
    "borrow": "Observe moisture level before every stroke. Water amount is as important as pigment amount.",
    "reflection": "Which technique produced the most useful accident, and how could you repeat it intentionally?",
    "quiz": [
      [
        "What creates soft spreading edges?",
        "Wet-on-wet."
      ],
      [
        "Which method gives sharper control?",
        "Wet-on-dry."
      ],
      [
        "How can you recover some light?",
        "Lift pigment while it can still be removed."
      ]
    ],
    "demo": [
      "Test each technique in a separate labeled box.",
      "Record paper wetness and brush wetness.",
      "Let effects dry before judging them.",
      "Circle three techniques to reuse in the landscape."
    ]
  },
  "24": {
    "vocab": [
      [
        "Broken color",
        "Separate touches of different hues that visually mix at viewing distance."
      ],
      [
        "Underwash",
        "An initial transparent color layer beneath later paint."
      ],
      [
        "Optical mixing",
        "Color interaction occurring in the viewer's eye rather than fully on the palette."
      ],
      [
        "Atmosphere",
        "The visual effect of light, air, haze, and weather in a scene."
      ]
    ],
    "notices": [
      [
        "Look at the sky",
        "Monet builds light from many small color differences rather than one flat blue."
      ],
      [
        "Find warm against cool",
        "Temperature shifts make light shimmer."
      ],
      [
        "Blur distance",
        "Atmospheric forms are often less sharply edged."
      ]
    ],
    "borrow": "Instead of mixing every color completely on the palette, place related colors beside each other and let the eye combine them.",
    "reflection": "Where did broken color make your landscape feel more alive than a flat mixture would have?",
    "quiz": [
      [
        "What is an underwash?",
        "An initial transparent color layer."
      ],
      [
        "What is broken color?",
        "Separate touches of related or contrasting hues."
      ],
      [
        "What is optical mixing?",
        "The eye blending nearby colors perceptually."
      ]
    ],
    "demo": [
      "Choose a reference with clear depth zones.",
      "Make a three-value thumbnail.",
      "Lay a warm transparent underwash.",
      "Build sky and distance with softer broken color."
    ]
  },
  "25": {
    "vocab": [
      [
        "Aerial perspective",
        "Depth created by atmospheric changes in color, contrast, and detail."
      ],
      [
        "Saturation",
        "The intensity or purity of a color."
      ],
      [
        "Temperature",
        "A color's relative warm or cool character."
      ],
      [
        "Edge hierarchy",
        "Varying edge sharpness according to depth and focus."
      ]
    ],
    "notices": [
      [
        "Cool the distance",
        "Bierstadt pushes far forms back with cooler, lighter color."
      ],
      [
        "Reduce contrast",
        "Distant mountains contain fewer strong dark-light jumps."
      ],
      [
        "Sharpen foreground",
        "Nearby plants and rocks receive more texture and edge definition."
      ]
    ],
    "borrow": "Make depth by changing contrast, saturation, temperature, and edge sharpness—not only by making things smaller.",
    "reflection": "Which aerial-perspective cue created the biggest jump in depth?",
    "quiz": [
      [
        "What usually happens to contrast with distance?",
        "It decreases."
      ],
      [
        "What often happens to saturation with distance?",
        "It decreases."
      ],
      [
        "Which area usually has the sharpest detail?",
        "The foreground or chosen focal area."
      ]
    ],
    "demo": [
      "Keep the farthest zone light, cool, and soft.",
      "Increase saturation toward middle ground.",
      "Reserve strongest contrast for foreground.",
      "Add detail selectively, then stop."
    ]
  },
  "26": {
    "vocab": [
      [
        "Color psychology",
        "The emotional or associative effects viewers may experience from color."
      ],
      [
        "Complementary contrast",
        "Strong interaction between opposite hues."
      ],
      [
        "Chromatic tension",
        "Visual energy created by intense color relationships."
      ],
      [
        "Expressive distortion",
        "Changing color, space, or form intentionally to affect emotion."
      ]
    ],
    "notices": [
      [
        "Red against green",
        "Van Gogh places complements close together so they intensify each other."
      ],
      [
        "Feel the floor tilt",
        "Perspective feels unstable, adding psychological discomfort."
      ],
      [
        "Notice the yellow light",
        "The lighting is not neutral; it contributes to the emotional pressure."
      ]
    ],
    "borrow": "Let formal choices reinforce meaning. Color, perspective, and brush direction can all tell the same emotional story.",
    "reflection": "Which formal choice in The Night Café affects you more—color or perspective—and why?",
    "quiz": [
      [
        "Why are red and green especially intense together?",
        "They are complementary hues."
      ],
      [
        "What is chromatic tension?",
        "Visual energy from strong color relationships."
      ],
      [
        "How can perspective become expressive?",
        "It can be intentionally exaggerated or destabilized."
      ]
    ],
    "demo": [
      "List the dominant hues.",
      "Locate complement pairings.",
      "Describe the room's spatial distortion.",
      "Connect at least three formal choices to emotional effect."
    ]
  },
  "27": {
    "vocab": [
      [
        "Color accuracy",
        "How faithfully a digital image represents the original artwork's colors."
      ],
      [
        "Sequence",
        "The order in which portfolio works are presented."
      ],
      [
        "Caption",
        "Short identifying information accompanying artwork."
      ],
      [
        "Selection criteria",
        "Rules used to decide which works belong in the portfolio."
      ]
    ],
    "notices": [
      [
        "Compare photographs to originals",
        "A good archive should not shift blue to gray or red to orange."
      ],
      [
        "Show range",
        "Include mixing studies and finished work, not three pieces proving the same skill."
      ],
      [
        "Keep labels consistent",
        "Professional presentation reduces distractions."
      ]
    ],
    "borrow": "Treat documentation as part of the artwork's presentation, not an afterthought.",
    "reflection": "Which Quarter 3 piece best represents your personal color choices?",
    "quiz": [
      [
        "What is color accuracy?",
        "Faithful digital representation of the original colors."
      ],
      [
        "Why use selection criteria?",
        "To curate intentionally instead of including everything."
      ],
      [
        "What belongs in a caption?",
        "Consistent identifying information such as title, medium, and date."
      ]
    ],
    "demo": [
      "Photograph in neutral indirect daylight.",
      "Compare screen color to the physical work.",
      "Include one process study and finished pieces.",
      "Write a specific reflection about one color decision."
    ]
  },
  "28": {
    "vocab": [
      [
        "Facial landmark",
        "A consistent structural reference point such as brow, eye line, nose base, or chin."
      ],
      [
        "Center line",
        "A guide showing the face's vertical orientation and turn."
      ],
      [
        "Eye line",
        "A horizontal guide locating the eyes on the head."
      ],
      [
        "Proportional canon",
        "A generalized system of average measurements used as a starting framework."
      ]
    ],
    "notices": [
      [
        "Start with the skull",
        "Leonardo's studies treat the head as structure, not a collection of features."
      ],
      [
        "Use guides as averages",
        "Real faces vary; proportion rules help you see deviations."
      ],
      [
        "Map before detail",
        "Placement matters more than eyelashes or hair."
      ]
    ],
    "borrow": "Use proportion rules to diagnose, not to erase individuality. The interesting part is how a real face differs from the average.",
    "reflection": "Which standard facial proportion was most different from what you expected?",
    "quiz": [
      [
        "Where do the eyes generally sit vertically?",
        "Roughly halfway between top of skull and chin."
      ],
      [
        "What does the center line show?",
        "The face's orientation and turn."
      ],
      [
        "Are proportion rules exact for every person?",
        "No; they are starting averages."
      ]
    ],
    "demo": [
      "Build the head as an egg/skull shape.",
      "Place center and eye lines.",
      "Map nose, mouth, and ears with guides.",
      "Draw a second face that intentionally varies from the average."
    ]
  },
  "29": {
    "vocab": [
      [
        "Orbital structure",
        "The bony socket and surrounding form supporting the eye."
      ],
      [
        "Plane change",
        "A shift in surface direction that changes light and value."
      ],
      [
        "Muzzle",
        "The rounded mouth-and-jaw area projecting from the face."
      ],
      [
        "Cartilage",
        "Flexible structural tissue forming much of the outer ear."
      ]
    ],
    "notices": [
      [
        "Think in volumes",
        "Kollwitz's features feel solid because eyes, nose, and lips sit inside larger facial masses."
      ],
      [
        "Use shadow to explain structure",
        "Darkness often gathers under lids, nostrils, and lips because planes turn away from light."
      ],
      [
        "Avoid symbol features",
        "No almond-eye icon or two-line nose; every feature changes with viewpoint and lighting."
      ]
    ],
    "borrow": "Construct each feature as a three-dimensional object before rendering eyelashes, nostrils, lip lines, or ear folds.",
    "reflection": "Which feature became easier once you thought of it as a 3D form?",
    "quiz": [
      [
        "Why is an eye not just an almond shape?",
        "It is a sphere wrapped by eyelids inside an orbital socket."
      ],
      [
        "What is a plane change?",
        "A change in surface direction."
      ],
      [
        "What creates many ear shadows?",
        "Layered cartilage forms and overlapping planes."
      ]
    ],
    "demo": [
      "Block the simple volume first.",
      "Mark the light direction.",
      "Add structural shadows before details.",
      "Finish with selective accents, not outlines everywhere."
    ]
  },
  "30": {
    "vocab": [
      [
        "Three-quarter view",
        "A head orientation between frontal and profile."
      ],
      [
        "Foreshortening",
        "Apparent shortening of a form pointing toward or away from the viewer."
      ],
      [
        "Far-side compression",
        "The apparent narrowing of features on the side turning away."
      ],
      [
        "Profile rhythm",
        "The connected silhouette pattern of forehead, nose, lips, and chin."
      ]
    ],
    "notices": [
      [
        "Watch the center line turn",
        "Sargent's heads feel solid because landmarks wrap around a skull."
      ],
      [
        "Compare near and far eyes",
        "The far eye is narrower and closer to the bridge of the nose."
      ],
      [
        "Study silhouette",
        "In profile, tiny changes in forehead-nose-lip-chin relationships strongly affect likeness."
      ]
    ],
    "borrow": "In a turned head, wrap guide lines around the form before placing features.",
    "reflection": "Which landmark moved the most when you shifted from front view to three-quarter view?",
    "quiz": [
      [
        "What happens to the far side in three-quarter view?",
        "It appears compressed."
      ],
      [
        "What is foreshortening?",
        "Apparent shortening due to direction in space."
      ],
      [
        "Why is silhouette critical in profile?",
        "It carries many of the features that establish likeness."
      ]
    ],
    "demo": [
      "Construct sphere and jaw.",
      "Curve the center line around the turn.",
      "Wrap brow, nose, and mouth guides around the head.",
      "Compare near/far widths before rendering."
    ]
  },
  "31": {
    "vocab": [
      [
        "Head unit",
        "A proportional measurement using head height as one unit."
      ],
      [
        "Gesture",
        "The overall directional action of a figure."
      ],
      [
        "Rib cage mass",
        "Simplified torso volume containing the chest."
      ],
      [
        "Pelvic mass",
        "Simplified block or bowl representing the pelvis."
      ]
    ],
    "notices": [
      [
        "See structure under anatomy",
        "Michelangelo's figures read because large masses and weight come first."
      ],
      [
        "Compare shoulder and pelvis tilt",
        "Opposing tilts make standing figures feel natural."
      ],
      [
        "Use the rule flexibly",
        "The eight-head canon is idealized; real bodies vary."
      ]
    ],
    "borrow": "Measure large body landmarks first, then build anatomy around them.",
    "reflection": "Which real-body proportion differed most from the idealized eight-head template?",
    "quiz": [
      [
        "What is a head unit?",
        "Head height used as a comparative body measurement."
      ],
      [
        "Is eight-head proportion universal?",
        "No; it is an idealized drawing system."
      ],
      [
        "Which masses organize the torso?",
        "Rib cage and pelvis."
      ]
    ],
    "demo": [
      "Mark eight equal head units.",
      "Place shoulders, rib cage, pelvis, knees, and feet.",
      "Connect masses with gesture and limb axes.",
      "Compare with an observed figure and note differences."
    ]
  },
  "32": {
    "vocab": [
      [
        "Line of action",
        "A sweeping directional line expressing the main movement of a pose."
      ],
      [
        "Weight shift",
        "How body mass transfers onto one leg or support."
      ],
      [
        "Contrapposto",
        "A standing pose with weight on one leg, producing opposing body tilts."
      ],
      [
        "Gesture drawing",
        "Rapid drawing prioritizing movement, balance, and action over detail."
      ]
    ],
    "notices": [
      [
        "Find the action first",
        "Degas's dancers feel alive because pose and weight are established before costume detail."
      ],
      [
        "Look for asymmetry",
        "Balanced poses are rarely perfectly mirrored."
      ],
      [
        "Notice cropped moments",
        "Unusual framing makes figures feel observed in motion rather than formally posed."
      ]
    ],
    "borrow": "If the gesture does not feel alive in the first 20 seconds, details will not rescue it.",
    "reflection": "Which pose had the clearest line of action, and what made it work?",
    "quiz": [
      [
        "What is the line of action?",
        "The main directional flow of the pose."
      ],
      [
        "What is weight shift?",
        "Transfer of body mass onto a support."
      ],
      [
        "What should gesture drawing ignore at first?",
        "Small details such as fingers, facial features, and clothing decoration."
      ]
    ],
    "demo": [
      "Mark the line of action in seconds.",
      "Add rib cage and pelvis masses.",
      "Indicate weight-bearing leg or support.",
      "Stop when the timer ends; do not polish."
    ]
  },
  "33": {
    "vocab": [
      [
        "Master copy",
        "A study made by recreating an existing respected artwork to learn technique."
      ],
      [
        "Grid transfer",
        "A proportional enlargement method using corresponding squares."
      ],
      [
        "Landmark",
        "A key point used to check placement."
      ],
      [
        "Source attribution",
        "Recording the original artist, title, date, and source."
      ]
    ],
    "notices": [
      [
        "Copy to understand",
        "The goal is analysis of proportion, value, and design—not pretending the image is yours."
      ],
      [
        "Use intersections",
        "Grid lines create measurable landmarks for eyes, nose, shoulders, and edges."
      ],
      [
        "Preserve attribution",
        "Historical study becomes ethical when the source is clearly identified."
      ]
    ],
    "borrow": "Transfer relationships square by square, but keep checking the whole head so the portrait does not become disconnected pieces.",
    "reflection": "Which landmark was easiest to place accurately with the grid?",
    "quiz": [
      [
        "What is the purpose of a master copy?",
        "To learn by analyzing and recreating another artist's decisions."
      ],
      [
        "What must accompany a master copy?",
        "Clear source attribution."
      ],
      [
        "Why use a grid?",
        "To transfer proportions more accurately."
      ]
    ],
    "demo": [
      "Record artist/title/date/source first.",
      "Overlay an even grid on reference and paper.",
      "Transfer major intersections lightly.",
      "Remove the grid only after the structure is correct."
    ]
  },
  "34": {
    "vocab": [
      [
        "Shadow family",
        "All connected areas facing away from the light considered as one group."
      ],
      [
        "Lost edge",
        "An edge that visually disappears because adjacent values are similar."
      ],
      [
        "Found edge",
        "A clearly visible edge created by contrast."
      ],
      [
        "Likeness",
        "Recognizable similarity to the specific subject."
      ]
    ],
    "notices": [
      [
        "Group shadows",
        "Rembrandt often treats large connected shadow masses as one statement."
      ],
      [
        "Lose some edges",
        "Not every contour is equally sharp; some dissolve into background or shadow."
      ],
      [
        "Save sharpness for focus",
        "Eyes, mouth, or key accents receive more definition than secondary areas."
      ]
    ],
    "borrow": "Build likeness with large proportion and value relationships before eyelashes or tiny texture.",
    "reflection": "Which large relationship mattered more to likeness than any small detail?",
    "quiz": [
      [
        "What is a shadow family?",
        "Connected shadow areas treated as a unified value group."
      ],
      [
        "What is a lost edge?",
        "An edge that disappears because neighboring values merge."
      ],
      [
        "What creates likeness first?",
        "Accurate large proportions and value relationships."
      ]
    ],
    "demo": [
      "Establish the main shadow family.",
      "Deepen darkest accents gradually.",
      "Lift or preserve key highlights.",
      "Vary edge sharpness around the focal area."
    ]
  },
  "35": {
    "vocab": [
      [
        "Artist statement",
        "A short first-person explanation of artistic ideas, process, and direction."
      ],
      [
        "Intent",
        "What the artist hoped to explore, communicate, or test."
      ],
      [
        "Process",
        "The materials, methods, and decisions used to create work."
      ],
      [
        "Revision",
        "Improving writing or artwork through deliberate reworking."
      ]
    ],
    "notices": [
      [
        "Use specifics",
        "Ringgold's work connects personal story, history, materials, and cultural context."
      ],
      [
        "Connect form and meaning",
        "Why quilt? Why story? Why repeated imagery? Medium becomes part of the message."
      ],
      [
        "Avoid empty claims",
        "“I love art” says little; naming one decision and its effect says much more."
      ]
    ],
    "borrow": "Write about specific choices you actually made. Concrete examples sound more confident than vague artistic language.",
    "reflection": "What is the clearest sentence you can write about how your art changed this year?",
    "quiz": [
      [
        "What should an artist statement explain?",
        "Intent, process, specific work, growth, and direction."
      ],
      [
        "Why name specific projects?",
        "They provide evidence for claims."
      ],
      [
        "What is revision?",
        "Deliberately improving clarity and effectiveness."
      ]
    ],
    "demo": [
      "Draft the main idea in one sentence.",
      "Use two or three projects as evidence.",
      "Explain one meaningful final-portrait decision.",
      "Revise for clarity and remove vague filler."
    ]
  },
  "36": {
    "vocab": [
      [
        "Exhibition",
        "A curated presentation of artwork for an audience."
      ],
      [
        "Narrative sequence",
        "An order designed to tell a story or show development."
      ],
      [
        "Wall label",
        "Concise identifying/context information displayed with a work."
      ],
      [
        "Presentation",
        "The way artwork and ideas are communicated to viewers."
      ]
    ],
    "notices": [
      [
        "Presentation is part of meaning",
        "Kusama designs environments where viewing becomes an experience."
      ],
      [
        "Sequence controls attention",
        "The order of works changes what viewers compare."
      ],
      [
        "End with purpose",
        "A capstone should make the year's growth visible, not simply stop at the last assignment."
      ]
    ],
    "borrow": "Curate the final portfolio to make one argument: this is how I learned to see, make, and think differently.",
    "reflection": "If a viewer remembered only three works from your year, which three would you want them to remember and why?",
    "quiz": [
      [
        "What is an exhibition?",
        "A curated presentation of artwork for an audience."
      ],
      [
        "Why use narrative sequence?",
        "To guide comparison and show development."
      ],
      [
        "What should a final portfolio demonstrate?",
        "Skill, process, reflection, and growth across time."
      ]
    ],
    "demo": [
      "Select 10–15 finished works and 4–6 process images.",
      "Sequence them to make growth visible.",
      "Add consistent titles, media, dates, and captions.",
      "Practice a concise 5–8 minute presentation."
    ]
  }
};

const COURSE = {"title": "Art Academy TLC", "subtitle": "Visual Arts 1 · A 36-Week Studio Course", "student": "Leilani", "description": "A year-long high-school studio art course that develops observational drawing, perspective, color, watercolor, portraiture, art history, critique, and portfolio skills.", "grading": [["Studio Projects", "40%"], ["Weekly Sketchbook", "30%"], ["Art History & Critiques", "20%"], ["Final Portfolio", "10%"]], "materials": ["Mixed-media sketchbook, 9×12 in., 80 lb+", "Drawing pencils: 2H, HB, 2B, 4B, 6B", "Kneaded eraser + standard eraser", "24-color artist-grade colored pencils", "Watercolor set + mixed nylon brushes", "Watercolor paper", "Black fineliners, 0.3 mm and 0.5 mm", "12–18 in. ruler", "Phone/camera for portfolio documentation"]};
const WEEKS = [{"week": 1, "quarter": 1, "title": "The Elements of Art", "focus": "Learn the visual vocabulary artists use to build every artwork.", "artist": "Wassily Kandinsky", "artistYears": "1866–1944", "why": "Kandinsky became famous for helping pioneer abstract art. He showed that line, shape, and color could carry emotion even without depicting recognizable objects.", "work": "Composition VIII (1923)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg", "lecture": "Before artists can bend the rules, they need to see the ingredients. Line directs the eye. Shape organizes the page. Value creates light. Color creates mood. Form suggests volume. Texture suggests surface. Space creates depth. Kandinsky used these elements almost like musical notes—arranging them for rhythm and feeling rather than realism.", "assignment": "Create an Elements Matrix in your sketchbook. Make seven labeled squares: Line, Shape, Color, Value, Form, Texture, and Space. Each square must visually demonstrate that element.", "steps": ["Title a two-page spread “Elements of Art.”", "Divide the spread into seven clean sections.", "Create a different visual example in every section.", "Use at least three media across the matrix: pencil, ink, and color.", "Write one sentence beneath each square explaining what the element does."], "check": ["Seven elements are present and labeled.", "Examples are visual, not just definitions.", "Craftsmanship is clean and intentional.", "Photo uploaded to portfolio folder."], "time": "2–3 hours", "materials": "Sketchbook, pencil, fineliner, colored pencils or watercolor"}, {"week": 2, "quarter": 1, "title": "Contour: Learning to Really See", "focus": "Break the habit of drawing symbols and train your eye-hand connection.", "artist": "Albrecht Dürer", "artistYears": "1471–1528", "why": "Dürer became one of the most celebrated draftsmen and printmakers of the Northern Renaissance because of his extraordinary observation, precision, and line control.", "work": "Praying Hands (c. 1508)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Albrecht_D%C3%BCrer_-_Praying_Hands%2C_1508_-_Google_Art_Project.jpg", "lecture": "Contour drawing is not about making a pretty picture quickly. It trains the brain to follow edges, overlaps, and tiny directional changes instead of using shortcuts like “this is what a hand looks like.” Dürer’s drawings reward close looking: every tendon, crease, and change of direction matters.", "assignment": "Complete three 10-minute blind contour drawings of your hand, then two detailed pure-contour drawings of household keys. Do not shade.", "steps": ["Set a timer for 10 minutes.", "For blind contours, look at your hand—not the paper.", "Move your pencil slowly as your eye follows the edge.", "For the key drawings, you may look back and forth.", "Use line weight and interior contour to show detail without shading."], "check": ["Three blind hand contours completed.", "Two key contours completed.", "No shading used.", "Lines show observation rather than symbolic shortcuts."], "time": "2 hours", "materials": "Sketchbook, graphite pencil, two keys"}, {"week": 3, "quarter": 1, "title": "Upside-Down Drawing & the Brain Shift", "focus": "See angles and spaces instead of naming facial features.", "artist": "Pablo Picasso", "artistYears": "1881–1973", "why": "Picasso became one of the most influential artists of the 20th century by repeatedly reinventing visual language, especially through Cubism. Even his radical work was grounded in exceptional traditional drawing skill.", "work": "Portrait of Igor Stravinsky (1920)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Igor_Stravinsky_Essay.jpg", "lecture": "When you recognize an eye, nose, or hand, your brain often substitutes a memorized symbol. Turning a drawing upside down weakens that shortcut. You begin comparing slopes, negative shapes, and distances instead. This is a classic observational exercise because it forces attention back onto what is actually there.", "assignment": "Copy Picasso’s portrait of Igor Stravinsky while the reference remains upside down. Do not rotate it until the drawing is complete.", "steps": ["Divide the reference and your page into four loose zones.", "Begin with the largest outside shapes.", "Compare angles and negative spaces constantly.", "Do not name features while drawing; think “curve,” “angle,” and “distance.”", "Rotate both reference and drawing only when finished, then write a 5-sentence reflection."], "check": ["Reference stayed upside down during the drawing.", "Major proportions are recognizable.", "Reflection explains what changed in your seeing.", "Work is dated and photographed."], "time": "2–3 hours", "materials": "Sketchbook, HB pencil, eraser"}, {"week": 4, "quarter": 1, "title": "The Physics of Light & Value", "focus": "Turn flat shapes into believable three-dimensional form.", "artist": "Caravaggio", "artistYears": "1571–1610", "why": "Caravaggio became famous for dramatic realism and tenebrism—staging intense light against deep darkness to make figures feel immediate and theatrical.", "work": "The Calling of Saint Matthew (1599–1600)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg", "lecture": "Value is the relative lightness or darkness of a surface. On a sphere, the highlight faces the light, the core shadow turns away from it, reflected light bounces back from nearby surfaces, and the cast shadow falls across the ground. Caravaggio amplified these relationships so light became part of the story.", "assignment": "Draw a 9-step value scale from paper white to your darkest graphite. Beneath it, render a sphere showing highlight, midtone, core shadow, reflected light, and cast shadow.", "steps": ["Create nine equal value boxes.", "Build graphite slowly; do not press hard too early.", "Draw a circle and establish a single light direction.", "Blend values gradually around the sphere while preserving the highlight.", "Label the five lighting zones with small leader lines."], "check": ["Nine clearly distinct values.", "Sphere reads as three-dimensional.", "Lighting direction is consistent.", "Labels are accurate."], "time": "2–3 hours", "materials": "2H, HB, 2B, 4B, 6B pencils; kneaded eraser"}, {"week": 5, "quarter": 1, "title": "Sighting & Measuring Proportion", "focus": "Use comparative measurement instead of guessing.", "artist": "Paul Cézanne", "artistYears": "1839–1906", "why": "Cézanne is famous for transforming still life and landscape through careful structure. His search for underlying geometric relationships helped bridge Impressionism and modern art.", "work": "Still Life with Apples (c. 1895–98)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_C%C3%A9zanne_-_Still_Life_with_Apples_-_Google_Art_Project.jpg", "lecture": "Sighting uses your pencil like a measuring stick. At arm’s length, you compare widths to heights, angles to verticals, and one object to another. The goal is not mathematical perfection—it is disciplined comparison. Cézanne repeatedly adjusted shapes because relationships matter more than isolated objects.", "assignment": "Set up two mugs. Use pencil sighting to measure height-to-width ratios, major angles, negative spaces, and overlaps before making a finished contour study.", "steps": ["Arrange two mugs so they overlap slightly.", "Hold your pencil at full arm’s length.", "Measure one mug’s width as a unit and compare other dimensions to it.", "Check handle angles and negative spaces.", "Make at least five visible correction marks before refining the drawing."], "check": ["Proportions are measured, not guessed.", "Overlap clearly shows which mug is in front.", "Ellipses feel consistent.", "Five corrections remain faintly visible."], "time": "2 hours", "materials": "Two mugs, sketchbook, HB pencil"}, {"week": 6, "quarter": 1, "title": "Studio Project: Observational Still Life", "focus": "Plan a finished graphite composition from life.", "artist": "Giorgio Morandi", "artistYears": "1890–1964", "why": "Morandi became famous for quiet still lifes of ordinary bottles and vessels. Tiny shifts in spacing, value, and proportion make his simple subjects feel deeply considered.", "work": "Natura morta / Still Life", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Giorgio_Morandi_-_Natura_morta_-_Google_Art_Project.jpg", "lecture": "A strong still life begins before shading. Artists decide what the eye should notice first, how objects overlap, and how empty space around objects supports the arrangement. Morandi proves that humble objects can become compelling when composition is intentional.", "assignment": "Arrange three complex objects—such as an apple, clear glass, and folded cloth—and create the structural contour layout for your final graphite still life.", "steps": ["Test at least three arrangements with tiny thumbnail sketches.", "Choose one arrangement with overlap and varied heights.", "Light it from one side.", "Sight major proportions before drawing details.", "Keep construction lines light; stop before full shading."], "check": ["Three thumbnail compositions completed.", "Final layout fills the page well.", "Objects overlap convincingly.", "Proportions have been checked."], "time": "2–3 hours", "materials": "Three objects, lamp/window light, 9x12 drawing paper, pencils"}, {"week": 7, "quarter": 1, "title": "Still Life: Building Deep Value", "focus": "Develop volume, contrast, and material differences.", "artist": "Jean-Baptiste-Siméon Chardin", "artistYears": "1699–1779", "why": "Chardin was celebrated for giving humble household objects unusual dignity through subtle light, atmosphere, and truthful observation.", "work": "Still Life with Attributes of the Arts (1766)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Jean_Sim%C3%A9on_Chardin_-_Still_Life_with_Attributes_of_the_Arts_-_WGA04784.jpg", "lecture": "A finished drawing needs a full range of values. Dark accents make light areas feel brighter, while soft transitions describe rounded surfaces. Different materials need different edges: glass may have sharp highlights; cloth uses soft folds; fruit combines smooth gradients with small texture changes.", "assignment": "Continue the Week 6 still life. Establish the darkest darks, then build the middle values while protecting highlights.", "steps": ["Squint at the still life to simplify value groups.", "Mark your darkest 3–5 areas first.", "Layer graphite rather than smearing immediately.", "Use kneaded eraser to lift reflected light and highlights.", "Vary edge softness to describe glass, fruit, and cloth."], "check": ["Full value range is visible.", "Objects feel three-dimensional.", "Materials look different from one another.", "Highlights remain clean."], "time": "3 hours", "materials": "Still life setup, 2B–6B pencils, kneaded eraser"}, {"week": 8, "quarter": 1, "title": "Finish + Formal Critique", "focus": "Learn to evaluate art with evidence rather than “I like it.”", "artist": "Diego Velázquez", "artistYears": "1599–1660", "why": "Velázquez became famous for masterful realism, complex compositions, and astonishing control of light and paint. Las Meninas is still studied because it makes viewers question space, viewpoint, and who is looking at whom.", "work": "Las Meninas (1656)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Las_Meninas_01.jpg", "lecture": "Formal critique separates observation from interpretation. First describe what is present. Then analyze how elements and principles organize it. Interpret possible meaning. Finally judge effectiveness using specific evidence. This structure makes critique useful instead of personal or vague.", "assignment": "Finish your still life and write a four-part critique: Describe, Analyze, Interpret, Judge.", "steps": ["Refine edges and remove distracting construction marks.", "Photograph the finished drawing in indirect daylight.", "Write 3–4 sentences for each critique section.", "Name at least three art elements in the Analyze section.", "In Judge, identify one success and one next-step improvement."], "check": ["Finished still life is signed and dated.", "All four critique sections are complete.", "Claims are supported by visual evidence.", "Photo is clear and square."], "time": "2–3 hours", "materials": "Finished still life, phone/camera, notebook or computer"}, {"week": 9, "quarter": 1, "title": "Quarter 1 Portfolio Lab", "focus": "Document growth and curate your strongest evidence.", "artist": "Louise Bourgeois", "artistYears": "1911–2010", "why": "Bourgeois became internationally famous for deeply personal sculpture and drawing about memory, family, fear, and identity. She worked for decades before receiving broad recognition, showing how an artist’s body of work develops over time.", "work": "Maman (1999)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Maman_%28sculpture%29.jpg", "lecture": "A portfolio is not a pile of everything you made. It is edited evidence of skill, risk, problem solving, and growth. Artists revisit older work to understand patterns in their decisions. The goal today is to make your progress visible.", "assignment": "Photograph your still life and 4–6 strongest sketchbook pages. Create a Quarter 1 portfolio folder and add a one-paragraph reflection.", "steps": ["Photograph art in bright indirect natural light.", "Crop and straighten each image.", "Rename files: W##_Title_Lastname.", "Choose work that shows different skills.", "Write 150–200 words: strongest growth, hardest challenge, next goal."], "check": ["5–7 works archived.", "Images are straight and evenly lit.", "Files use consistent names.", "Reflection identifies a specific next goal."], "time": "1–2 hours", "materials": "Phone/camera, computer or cloud folder"}, {"week": 10, "quarter": 2, "title": "One-Point Perspective", "focus": "Build believable depth with a horizon line and one vanishing point.", "artist": "Leon Battista Alberti", "artistYears": "1404–1472", "why": "Alberti was an artist, architect, and theorist whose 1435 treatise described a systematic method for linear perspective, helping Renaissance artists construct convincing space.", "work": "Renaissance perspective theory", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Alberti-portrait.jpg", "lecture": "Perspective is a visual system: parallel edges that move away from us appear to converge. In one-point perspective, depth lines meet at one vanishing point on the horizon. Horizontal edges stay horizontal and vertical edges stay vertical.", "assignment": "Create a perspective practice sheet with six cubes placed above, below, and on the horizon line.", "steps": ["Draw one horizon line and one central vanishing point.", "Place six front-facing squares in different positions.", "Connect receding corners to the vanishing point.", "Choose back edges and erase extra construction lines.", "Label horizon line, vanishing point, and orthogonals."], "check": ["All depth lines converge correctly.", "Verticals remain vertical.", "Horizontals remain horizontal.", "Six cubes occupy varied positions."], "time": "2 hours", "materials": "Ruler, pencil, eraser, drawing paper"}, {"week": 11, "quarter": 2, "title": "One-Point Streetscape", "focus": "Apply perspective to a complete environment.", "artist": "Piero della Francesca", "artistYears": "c. 1415–1492", "why": "Piero became famous for serene Renaissance paintings built on geometry, proportion, and carefully structured perspective.", "work": "The Ideal City (attributed circle of Piero)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Idealstadt.jpg", "lecture": "Perspective becomes convincing when every architectural detail obeys the same spatial system. Windows, curbs, awnings, and signs shrink toward the vanishing point. Repetition gives you a visual ruler for depth.", "assignment": "Draw a one-point street featuring at least five buildings, sidewalk divisions, doors, windows, and at least one recessed doorway.", "steps": ["Choose an eye-level horizon.", "Block major buildings before details.", "Send sidewalk and roof depth lines to the vanishing point.", "Repeat windows with decreasing spacing.", "Add one foreground object for scale."], "check": ["At least five buildings.", "Details follow the same vanishing point.", "Scale decreases with distance.", "Composition feels inhabited, not just technical."], "time": "3 hours", "materials": "Ruler, pencils, eraser, 9x12 paper"}, {"week": 12, "quarter": 2, "title": "Surrealist Interior", "focus": "Use accurate space to make impossible ideas feel believable.", "artist": "René Magritte", "artistYears": "1898–1967", "why": "Magritte became famous by painting ordinary objects in impossible combinations. His calm, realistic style makes viewers question language, reality, and expectation.", "work": "The Son of Man (1964)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rene_Magritte_The_Son_of_Man.jpg", "lecture": "Surrealism often becomes more convincing when the drawing itself is technically believable. A room can obey one-point perspective while gravity, scale, materials, or object relationships become impossible. The contrast between order and absurdity creates the effect.", "assignment": "Design a one-point perspective interior with at least three surreal transformations.", "steps": ["Draw three thumbnail room ideas.", "Choose a clear one-point room structure.", "Add at least three impossible changes: scale, gravity, material, or object fusion.", "Keep architectural perspective accurate.", "Add notes explaining what each surreal choice could symbolize."], "check": ["Room uses correct one-point perspective.", "Three surreal components are clearly visible.", "Surreal choices feel intentional.", "Symbol notes are complete."], "time": "3 hours", "materials": "Pencil, ruler, sketchbook or drawing paper"}, {"week": 13, "quarter": 2, "title": "Two-Point Perspective Mechanics", "focus": "Draw corner views where forms recede in two directions.", "artist": "M. C. Escher", "artistYears": "1898–1972", "why": "Escher became famous for mathematically precise images that manipulate architecture, infinity, and impossible space. His work shows how mastering perspective lets artists deliberately break it.", "work": "Relativity (1953)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Escher%27s_Relativity.jpg", "lecture": "In two-point perspective, the front edge of a box is usually vertical while its left and right planes recede toward separate vanishing points. Keeping those points far apart avoids extreme distortion.", "assignment": "Create a two-point practice page of intersecting buildings and corner structures.", "steps": ["Draw a horizon line and two distant vanishing points.", "Start with three vertical corner edges.", "Connect top and bottom endpoints to both vanishing points.", "Add windows and doors using the same directional systems.", "Try one structure above eye level and one below."], "check": ["Two vanishing points are used consistently.", "Verticals stay vertical.", "Details wrap around corners.", "No accidental third perspective system."], "time": "2–3 hours", "materials": "Ruler, pencil, eraser"}, {"week": 14, "quarter": 2, "title": "Architectural Landmark: Structure", "focus": "Translate real architecture into a perspective framework.", "artist": "Filippo Brunelleschi", "artistYears": "1377–1446", "why": "Brunelleschi is credited with demonstrating linear perspective experimentally in Renaissance Florence. He was also the architect behind the engineering feat of Florence Cathedral’s dome.", "work": "Florence Cathedral Dome", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Cattedrale_di_Santa_Maria_del_Fiore_-_dome.jpg", "lecture": "Architecture looks complicated because of details, but every building can be reduced to big boxes, cylinders, arches, and repeated modules. Artists build the simple structure first, then subdivide it.", "assignment": "Choose a famous historic building and create its structural drawing using two-point perspective.", "steps": ["Choose a reference with a clear corner view.", "Identify the horizon and likely vanishing directions.", "Block the building as large simple masses.", "Subdivide major architectural sections.", "Stop before texture and small ornament."], "check": ["Building is identifiable from structure alone.", "Perspective is consistent.", "Large masses were solved before details.", "Reference source is recorded."], "time": "3 hours", "materials": "Reference photo, ruler, pencil, large drawing paper"}, {"week": 15, "quarter": 2, "title": "Architectural Texture & Detail", "focus": "Use line to describe brick, stone, glass, and ornament.", "artist": "Giovanni Battista Piranesi", "artistYears": "1720–1778", "why": "Piranesi became famous for extraordinarily detailed architectural etchings of Rome and imagined prisons. His linework made stone, shadow, scale, and atmosphere feel monumental.", "work": "Carceri d'invenzione", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Piranesi_Carceri_VII.jpg", "lecture": "Texture follows form. Brick courses recede toward vanishing points; glass reflects angular shapes; stone joints wrap around corners. Repeating texture everywhere equally can flatten a drawing, so artists concentrate detail near focal areas.", "assignment": "Add architectural textures and major details to your landmark using waterproof fineliner.", "steps": ["Test brick, stone, and glass textures on scrap paper.", "Ink major contours first.", "Apply texture so it follows perspective.", "Vary line weight: stronger foreground, lighter distance.", "Leave breathing room instead of texturing every inch."], "check": ["At least three surface types are differentiated.", "Texture follows perspective.", "Line weight varies.", "Focal area receives the most detail."], "time": "3 hours", "materials": "0.3 and 0.5 fineliners, ruler, Week 14 drawing"}, {"week": 16, "quarter": 2, "title": "Cross-Hatching for Value", "focus": "Create light and shadow using only directional ink lines.", "artist": "Rembrandt van Rijn", "artistYears": "1606–1669", "why": "Rembrandt became famous as a painter and printmaker for psychological depth and dramatic light. His etchings use layered lines to create astonishing tonal range.", "work": "The Three Crosses (1653)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rembrandt_-_The_Three_Crosses_-_Google_Art_Project.jpg", "lecture": "Hatching uses parallel lines for tone; cross-hatching layers directions. Darker value comes from closer spacing, additional layers, and sometimes heavier marks—not scribbling. Following the surface direction also helps describe form.", "assignment": "Make an ink-only value scale, then use cross-hatching to complete all major shadows in your architectural landmark.", "steps": ["Create a five-step hatching value strip.", "Use one direction for light values.", "Add crossing directions for darker values.", "On the building, hatch shadow planes consistently.", "Keep highlights as untouched paper."], "check": ["Five distinct ink values.", "No pencil shading remains in final shadows.", "Hatching direction feels controlled.", "Darkest values support depth."], "time": "2–3 hours", "materials": "Fineliners, landmark drawing"}, {"week": 17, "quarter": 2, "title": "Master Perspective Critique", "focus": "Read how a master composition directs your eye through space.", "artist": "Raphael", "artistYears": "1483–1520", "why": "Raphael became one of the defining painters of the High Renaissance through balanced composition, graceful figures, and extraordinary control of spatial organization.", "work": "The School of Athens (1509–1511)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sanzio_01.jpg", "lecture": "In The School of Athens, architecture funnels toward a vanishing point positioned between Plato and Aristotle. Perspective is not merely a trick for realism—it is compositional hierarchy. The space tells you where to look.", "assignment": "Write a 250–350 word visual analysis of The School of Athens focused on perspective and composition.", "steps": ["Locate the horizon line and primary vanishing point.", "Trace at least five implied orthogonals with your eyes.", "Describe how figures create foreground, middle ground, and background.", "Explain why Plato and Aristotle become the focal point.", "Conclude with one technique you can borrow."], "check": ["Vanishing point is correctly identified.", "Analysis uses visual evidence.", "Foreground/middle/background are discussed.", "Writing goes beyond biography."], "time": "1–2 hours", "materials": "Artwork reference, notebook/computer"}, {"week": 18, "quarter": 2, "title": "Quarter 2 Portfolio Review", "focus": "Present technical growth in space, architecture, and ink.", "artist": "Zaha Hadid", "artistYears": "1950–2016", "why": "Hadid became one of the world’s most celebrated architects for fluid, futuristic buildings. Her early paintings and drawings used extreme perspective to imagine architecture before it could be built.", "work": "Architectural drawings and built works", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Zaha_Hadid_in_Heydar_Aliyev_Cultural_center_in_Baku_nov_2013.jpg", "lecture": "Design portfolios show process as well as outcomes. A strong architectural page can include early construction, texture tests, final art, and a short note explaining the choices that improved the work.", "assignment": "Finalize and photograph your architectural landmark. Add it, perspective studies, and a written self-assessment to your portfolio.", "steps": ["Erase stray graphite where appropriate.", "Photograph or scan the final work straight-on.", "Include one practice sheet to show process.", "Write 150–200 words about perspective accuracy and ink technique.", "Choose one goal for the color quarter."], "check": ["Final architecture work is archived.", "One process piece is included.", "Reflection is specific.", "Quarter folder is organized."], "time": "1–2 hours", "materials": "Camera/scanner, portfolio folder"}, {"week": 19, "quarter": 3, "title": "The 12-Part Color Wheel", "focus": "Mix secondary and tertiary colors from primaries.", "artist": "Johannes Itten", "artistYears": "1888–1967", "why": "Itten was a Bauhaus teacher whose color theories and teaching exercises strongly shaped modern design education. His 12-part color wheel remains a common instructional model.", "work": "Farbkreis / Color Wheel", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Farbkreis_Itten_1961.png", "lecture": "Color theory is partly science and partly perception. Mixing teaches more than buying premixed colors because you see how pigments shift. A useful wheel makes relationships visible: complements sit opposite; analogous families sit beside each other; triads form balanced triangles.", "assignment": "Paint a clean 12-part color wheel using only red, yellow, and blue as starting pigments.", "steps": ["Draw 12 equal wedges.", "Place primaries evenly around the wheel.", "Mix secondaries between each pair.", "Mix six tertiary colors between primary and secondary neighbors.", "Label primary, secondary, tertiary, and three complementary pairs."], "check": ["Twelve distinct hues.", "Secondaries are mixed, not premade.", "Transitions around wheel make sense.", "Labels are accurate."], "time": "2–3 hours", "materials": "Watercolor, brushes, palette, watercolor paper"}, {"week": 20, "quarter": 3, "title": "Tints, Tones & Shades", "focus": "Expand one hue into a complete value family.", "artist": "Mark Rothko", "artistYears": "1903–1970", "why": "Rothko became famous for large fields of luminous color designed to create an emotional encounter rather than depict objects.", "work": "Color-field paintings", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mark_Rothko_No_3_National_Gallery_of_Art.jpg", "lecture": "A tint lightens a hue; a shade darkens it; a tone reduces intensity, often by mixing a complement or neutral. Color families can create depth and emotion even with very little subject matter. Rothko relied on subtle shifts rather than complicated imagery.", "assignment": "Choose one hue and create a grid showing pure hue, multiple tints, multiple shades, and multiple tones.", "steps": ["Choose a hue you can mix consistently.", "Paint pure hue as your control sample.", "Create at least four lighter tints.", "Create at least four darker shades.", "Create at least four muted tones with the complement."], "check": ["Tint, shade, and tone are not confused.", "Gradations are visibly different.", "Mixing is controlled.", "Grid is labeled."], "time": "2 hours", "materials": "Watercolor or gouache, palette, brush"}, {"week": 21, "quarter": 3, "title": "Color Harmonies", "focus": "See how palette choices change the same subject.", "artist": "Henri Matisse", "artistYears": "1869–1954", "why": "Matisse became famous for using intense, non-naturalistic color and simplified form. As a leader of Fauvism, he treated color as an expressive force rather than merely local description.", "work": "The Open Window, Collioure (1905)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Henri_Matisse%2C_1905%2C_Open_Window%2C_Collioure_%28La_fen%C3%AAtre_ouverte%29%2C_oil_on_canvas%2C_55.3_x_46_cm%2C_National_Gallery_of_Art%2C_Washington.jpg", "lecture": "A color harmony is a relationship among hues. Monochromatic palettes emphasize value and unity; analogous colors feel related; complements create tension; triads feel lively and balanced. Matisse often chose emotional color over literal color.", "assignment": "Draw four identical thumbnail landscapes. Paint them as monochromatic, analogous, complementary, and triadic studies.", "steps": ["Use one simple landscape drawing four times.", "Label each harmony before painting.", "Limit yourself strictly to the assigned family.", "Keep values readable even when colors change.", "Write one sentence describing the mood of each version."], "check": ["All four harmonies are correct.", "Same composition is used four times.", "Values still create depth.", "Mood notes are specific."], "time": "2–3 hours", "materials": "Watercolor, brush, ruler, pencil"}, {"week": 22, "quarter": 3, "title": "Monochromatic Expression", "focus": "Use one hue family to communicate emotion.", "artist": "Pablo Picasso", "artistYears": "1881–1973", "why": "Picasso’s Blue Period is famous because a narrow palette amplified themes of grief, isolation, and poverty. It shows how palette can unify content and emotion.", "work": "The Old Guitarist (1903–04)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pablo_Picasso%2C_1903-04%2C_The_Old_Guitarist%2C_oil_on_panel%2C_122.9_x_82.6_cm%2C_Art_Institute_of_Chicago.jpg", "lecture": "Monochromatic does not mean flat. A single hue can still range from pale, quiet tints to deep, intense shadows. The challenge is to let value, edge, and composition carry form while color carries emotional association.", "assignment": "Choose an emotion and create a portrait or abstract composition rendered with one dominant hue plus its tints, tones, and shades.", "steps": ["Write five visual words associated with your emotion.", "Make three thumbnail compositions.", "Select one master hue intentionally.", "Use at least seven distinct values of the hue.", "Add a 100-word note explaining palette and composition choices."], "check": ["Emotion is named.", "One hue family dominates.", "At least seven value shifts are visible.", "Artist note connects color to meaning."], "time": "3 hours", "materials": "Watercolor or colored pencil, 9x12 paper"}, {"week": 23, "quarter": 3, "title": "Watercolor Texture Laboratory", "focus": "Build a reusable technique vocabulary.", "artist": "J. M. W. Turner", "artistYears": "1775–1851", "why": "Turner became famous for luminous landscapes where atmosphere, weather, and light often dissolve solid forms. His watercolor practice helped make transparency itself expressive.", "work": "Watercolor landscapes", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Mallord_William_Turner_-_The_Blue_Rigi%2C_Sunrise_-_Google_Art_Project.jpg", "lecture": "Watercolor is a partnership with water. Wet-on-wet encourages blooms and soft transitions; wet-on-dry gives control; salt can pull pigment into crystalline textures; lifting restores light. Instead of fighting accidents, artists learn which conditions create which effects.", "assignment": "Create a labeled watercolor technique sheet including wet-on-wet, wet-on-dry, gradient wash, lifting, salt texture, dry brush, and at least one experimental effect.", "steps": ["Divide paper into labeled test boxes.", "Test one technique per box.", "Record how wet the paper and brush were.", "Let each sample dry completely.", "Circle the three effects you want to use next week."], "check": ["At least seven techniques tested.", "Each sample is labeled.", "Observations are recorded.", "Sheet will be kept as a reference."], "time": "2 hours", "materials": "Watercolor paper, paint, brushes, salt, paper towel"}, {"week": 24, "quarter": 3, "title": "Impressionist Landscape: Light First", "focus": "Begin a landscape by painting atmosphere rather than outlining objects.", "artist": "Claude Monet", "artistYears": "1840–1926", "why": "Monet became the central figure of Impressionism by repeatedly painting changing light and atmosphere. His loose broken color challenged the polished finish of academic painting.", "work": "Impression, Sunrise (1872)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Claude_Monet%2C_Impression%2C_soleil_levant.jpg", "lecture": "Impressionists asked what light does to color in a particular moment. Instead of outlining everything, they used broken touches and adjacent hues to let the viewer’s eye mix color. Warm and cool shifts can suggest sunlight, haze, and distance.", "assignment": "Choose a landscape photo. Apply a warm underwash, then begin sky and distance using broken color inspired by Monet.", "steps": ["Choose a landscape with clear foreground, middle ground, and distance.", "Make a 3-value thumbnail first.", "Lay a light warm wash across much of the paper.", "Paint sky and distant shapes with softer edges.", "Avoid black; darken with color mixtures."], "check": ["Warm underwash remains visible in places.", "Distance is softer than foreground.", "Color is mixed optically in some areas.", "Major values are established."], "time": "3 hours", "materials": "Watercolor, landscape reference, watercolor paper"}, {"week": 25, "quarter": 3, "title": "Landscape Depth & Aerial Perspective", "focus": "Finish the landscape by controlling color temperature, saturation, and detail.", "artist": "Albert Bierstadt", "artistYears": "1830–1902", "why": "Bierstadt became famous for dramatic large-scale landscapes of the American West. His paintings use atmospheric perspective and theatrical light to create vast depth.", "work": "Among the Sierra Nevada, California (1868)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Albert_Bierstadt_-_Among_the_Sierra_Nevada%2C_California_-_Google_Art_Project.jpg", "lecture": "Aerial perspective is caused by atmosphere between you and distant objects. Faraway shapes tend to lose contrast, detail, and saturation and often appear cooler. Stronger detail and contrast advance toward the viewer.", "assignment": "Complete your Impressionist landscape, emphasizing aerial perspective from distant background to detailed foreground.", "steps": ["Keep farthest shapes low-contrast and cool.", "Increase saturation toward the middle ground.", "Reserve sharpest edges for foreground.", "Add selective texture with dry brush.", "Compare the whole painting from across the room before final accents."], "check": ["Three depth zones are readable.", "Foreground has strongest detail.", "Distance is less saturated.", "Final accents do not flatten the space."], "time": "3 hours", "materials": "Week 24 painting, watercolor supplies"}, {"week": 26, "quarter": 3, "title": "Color Psychology: Van Gogh", "focus": "Analyze how complementary color can create emotional tension.", "artist": "Vincent van Gogh", "artistYears": "1853–1890", "why": "Van Gogh became one of the most recognized Post-Impressionists through expressive brushwork, intense color, and deeply personal images. His fame grew dramatically after his death.", "work": "The Night Café (1888)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Vincent_Willem_van_Gogh_076.jpg", "lecture": "Van Gogh described wanting The Night Café to convey a disturbing human atmosphere. Red and green—complements—intensify each other when placed together. Perspective tilts aggressively, and yellow light feels almost acidic. Formal choices create psychological pressure.", "assignment": "Write a 250-word analysis of The Night Café focused on complementary color, perspective, and emotional effect.", "steps": ["List the dominant reds, greens, and yellows you see.", "Identify where complements touch directly.", "Describe how perspective makes the room feel.", "Connect at least three visual choices to emotion.", "Conclude by explaining whether the palette feels harmonious or intentionally unstable."], "check": ["Approximately 250 words.", "Specific colors and locations are named.", "Perspective is discussed.", "Interpretation is supported by evidence."], "time": "1–2 hours", "materials": "Artwork reference, notebook/computer"}, {"week": 27, "quarter": 3, "title": "Quarter 3 Portfolio Assembly", "focus": "Curate evidence of color mixing, technique, and expressive intent.", "artist": "Georgia O’Keeffe", "artistYears": "1887–1986", "why": "O’Keeffe became a major American modernist by enlarging natural forms and simplifying landscapes into powerful color relationships. She also carefully shaped how her work was presented publicly.", "work": "Red Canna (1924)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Georgia_O%27Keeffe_-_Red_Canna_-_Google_Art_Project.jpg", "lecture": "Color work can photograph poorly if lighting changes the hue. Portfolio documentation should be color-accurate and consistent. Place the artwork near indirect daylight and compare the photo against the original before uploading.", "assignment": "Archive your monochromatic piece, technique sheet, and finished landscape. Write a Quarter 3 reflection.", "steps": ["Photograph in indirect daylight.", "Correct crop and rotation only; avoid heavy filters.", "Include one color-mixing study.", "Write 150–200 words about your strongest color decision.", "Choose one skill to carry into portraiture."], "check": ["Three or more color works archived.", "Photos are color-accurate.", "Reflection names a specific decision.", "Files are organized."], "time": "1–2 hours", "materials": "Artwork, phone/camera, portfolio folder"}, {"week": 28, "quarter": 4, "title": "Facial Proportions: The Mapping Rule", "focus": "Learn standard landmarks before studying individual variation.", "artist": "Leonardo da Vinci", "artistYears": "1452–1519", "why": "Leonardo became famous not only for paintings such as the Mona Lisa but for combining art with relentless anatomical, scientific, and engineering observation.", "work": "Anatomical and proportion studies", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Da_Vinci_Vitruve_Luc_Viatour.jpg", "lecture": "Proportion rules are starting averages, not formulas for every face. In a front view, the eyes sit roughly halfway down the head; the bottom of the nose is roughly halfway from eyes to chin; the mouth sits between nose and chin; ears roughly span brow to nose. Real likeness comes from noticing how an individual differs.", "assignment": "Draw a forward-facing head map and label the standard eye, brow, nose, mouth, ear, and center-line relationships.", "steps": ["Draw an egg-shaped head and center line.", "Place the eye line halfway between top and chin.", "Fit approximately five eye-widths across the face.", "Map nose, mouth, and ears using proportional guides.", "On a second head, intentionally vary features to create an individual."], "check": ["Guidelines are labeled.", "Features align symmetrically in the first study.", "Second head demonstrates variation.", "Proportions are measured."], "time": "2 hours", "materials": "Sketchbook, HB pencil, ruler"}, {"week": 29, "quarter": 4, "title": "Facial Features in Detail", "focus": "Study eyes, nose, lips, and ears as three-dimensional forms.", "artist": "Käthe Kollwitz", "artistYears": "1867–1945", "why": "Kollwitz became famous for emotionally powerful drawings and prints of grief, poverty, motherhood, and war. Her faces and hands communicate enormous feeling through value and structure.", "work": "Self-portraits and figure drawings", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/K%C3%A4the_Kollwitz_self_portrait_1927.jpg", "lecture": "A feature is not an icon. An eye is a sphere wrapped by lids; a nose is a wedge catching light; lips wrap around the cylinder of the mouth; the ear is a layered cartilage form. Thinking in volumes prevents “sticker features.”", "assignment": "Create four highly rendered studies: one eye, one nose, lips, and one ear.", "steps": ["Use a clear photo or mirror reference.", "Begin each feature with simple 3D masses.", "Identify light direction before details.", "Render with at least five values.", "Annotate one structural insight beside each study."], "check": ["Four features completed.", "Each feels three-dimensional.", "At least five values used.", "Four structural notes included."], "time": "3 hours", "materials": "Sketchbook, graphite pencils, mirror/photo references"}, {"week": 30, "quarter": 4, "title": "Profile & Three-Quarter Views", "focus": "Understand how facial landmarks wrap around the skull.", "artist": "John Singer Sargent", "artistYears": "1856–1925", "why": "Sargent became one of the most sought-after portraitists of his era because he could capture likeness, gesture, and social presence with seemingly effortless decisions.", "work": "Portrait drawings and paintings", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/John_Singer_Sargent_-_Self_Portrait_-_Google_Art_Project.jpg", "lecture": "In three-quarter view, the center line curves away and the far side compresses. The far eye narrows, the nose overlaps the cheek, and the mouth wraps around the muzzle of the face. Profiles depend heavily on forehead-nose-lip-chin rhythm.", "assignment": "Draw one profile head and one three-quarter head from reference, showing construction lines.", "steps": ["Block the skull as a sphere plus jaw.", "Draw a curved center line for three-quarter view.", "Place brow, nose, and mouth lines wrapping around form.", "Compare near and far feature widths.", "Keep construction visible beneath refinement."], "check": ["Both views completed.", "Center line and cross-contours are visible.", "Far-side compression is believable.", "Profile silhouette is carefully observed."], "time": "3 hours", "materials": "Graphite, sketchbook, references"}, {"week": 31, "quarter": 4, "title": "Figure Proportion: 8-Heads Rule", "focus": "Use proportional landmarks to organize a standing figure.", "artist": "Michelangelo", "artistYears": "1475–1564", "why": "Michelangelo became a defining Renaissance master through monumental sculpture, painting, and architecture. His intense study of anatomy gave figures extraordinary physical presence.", "work": "David (1501–1504)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/%27David%27_by_Michelangelo_Fir_JBU005_denoised.jpg", "lecture": "The “8-heads” system is an idealized design tool. Key landmarks often fall around head 2 (chest), 3 (navel), 4 (pelvis), 6 (knees), and 8 (feet). Real people vary, but the framework helps diagnose proportions.", "assignment": "Construct a standing figure template measured at eight head units, then draw a second figure from observation and compare differences.", "steps": ["Mark eight equal vertical head units.", "Place shoulder, rib cage, pelvis, knees, and feet.", "Add limb cylinders around the gesture.", "Draw a second figure from a photo or mirror.", "Write three differences between idealized and observed proportions."], "check": ["Eight-head template is measured.", "Major body landmarks are placed.", "Observed figure is separate.", "Three comparison notes included."], "time": "2–3 hours", "materials": "Sketchbook, pencil, ruler, figure reference"}, {"week": 32, "quarter": 4, "title": "Gesture & Kinesthetic Form", "focus": "Capture movement before detail.", "artist": "Edgar Degas", "artistYears": "1834–1917", "why": "Degas became famous for images of dancers, racehorses, and modern life. He studied repeated poses obsessively, capturing off-balance moments and cropped viewpoints that feel immediate.", "work": "Dancer studies", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Edgar_Degas_-_Dancer_with_a_Bouquet_of_Flowers_%28Star_of_the_Ballet%29_-_Google_Art_Project.jpg", "lecture": "Gesture drawing asks: where is the energy going? Start with a line of action, then weight, tilt, and rhythm. A 30-second drawing can feel more alive than a 30-minute drawing if it captures balance and direction.", "assignment": "Complete ten 2-minute gesture drawings from a reference site, sports video paused at varied moments, or a family model.", "steps": ["Prepare ten page spaces before beginning.", "Set a strict 2-minute timer.", "Draw line of action first.", "Add rib cage and pelvis masses next.", "Avoid facial features, fingers, and clothing detail."], "check": ["Ten gestures completed.", "Line of action is visible.", "Poses vary.", "Drawings prioritize movement over detail."], "time": "1 hour", "materials": "Large paper or sketchbook, soft graphite/charcoal, timer"}, {"week": 33, "quarter": 4, "title": "Master Portrait Copy: Structure", "focus": "Learn from a historical portrait by reconstructing its design.", "artist": "Frida Kahlo", "artistYears": "1907–1954", "why": "Kahlo became internationally famous for psychologically intense self-portraits that merge personal experience, Mexican identity, symbolism, pain, and resilience.", "work": "Self-Portrait with Thorn Necklace and Hummingbird (1940)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg", "lecture": "A master copy is a study, not an attempt to claim someone else’s work. Artists have long copied respected works to understand proportion, value, edges, and composition. Grid transfer slows you down and makes relationships measurable.", "assignment": "Choose a historical portrait by Leonardo, Rembrandt, Kahlo, Sargent, or another approved master. Grid the reference and transfer the structural drawing onto large paper.", "steps": ["Record artist, title, date, and museum/source.", "Overlay an equal grid on the reference.", "Lightly draw the same grid on final paper.", "Transfer one square at a time, focusing on shapes and intersections.", "Erase or soften the grid after the structure is accurate."], "check": ["Source information is recorded.", "Grid proportions match.", "Structure is accurate before rendering.", "No heavy shading yet."], "time": "3 hours", "materials": "Large drawing paper, ruler, pencil, portrait reference"}, {"week": 34, "quarter": 4, "title": "Final Portrait Rendering", "focus": "Build likeness through value, edge, and patient layering.", "artist": "Rembrandt van Rijn", "artistYears": "1606–1669", "why": "Rembrandt’s portraits and self-portraits are famous for luminous value, varied edges, and psychological presence. He often lets some passages dissolve while emphasizing the face.", "work": "Self-Portrait with Two Circles (c. 1665–69)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg", "lecture": "Portrait likeness depends less on eyelashes than on big relationships: skull shape, eye spacing, nose length, mouth placement, and value pattern. Render broad shadow families first, then refine the focal features. Let some edges stay soft.", "assignment": "Complete the master portrait in graphite or colored pencil with a full tonal range and controlled edges.", "steps": ["Establish the main shadow family across the face.", "Deepen darkest accents gradually.", "Preserve or lift highlights.", "Sharpen edges near the focal area and soften secondary areas.", "Step back frequently to compare the whole head."], "check": ["Full tonal range.", "Likeness is driven by proportion.", "Edges vary intentionally.", "Work is signed as a study “after [artist].”"], "time": "4–5 hours", "materials": "Graphite or colored pencils, kneaded eraser, Week 33 drawing"}, {"week": 35, "quarter": 4, "title": "The Artist Statement", "focus": "Explain your process, growth, choices, and artistic direction.", "artist": "Faith Ringgold", "artistYears": "1930–2024", "why": "Ringgold became famous for combining painting, quilting, storytelling, history, and activism. Her work demonstrates how an artist’s voice can connect personal experience to larger cultural narratives.", "work": "Tar Beach (1988)", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Faith_Ringgold_2017.jpg", "lecture": "An artist statement is not a book report. It tells the viewer what matters in your work: what you explored, how you made decisions, what changed, and what you want to investigate next. Strong statements use concrete examples from actual pieces.", "assignment": "Write a polished 300-word artist statement about your development across the year and the meaning/process of your final portrait.", "steps": ["Open with what you learned to notice or make differently.", "Name 2–3 specific projects as evidence.", "Discuss your strongest medium and why.", "Explain one meaningful decision in the final portrait.", "End with a future artistic question or goal."], "check": ["Around 300 words.", "Specific artworks are named.", "Process and meaning are both discussed.", "Writing has been revised for clarity."], "time": "1–2 hours", "materials": "Portfolio, computer/notebook"}, {"week": 36, "quarter": 4, "title": "Final Portfolio Exhibition", "focus": "Curate, present, and defend a year of artistic growth.", "artist": "Yayoi Kusama", "artistYears": "1929–", "why": "Kusama became globally famous for immersive installations, repeated dots and nets, sculpture, painting, and a distinctive lifelong visual language. Her exhibitions turn presentation itself into part of the artwork.", "work": "Infinity Mirror Rooms", "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Yayoi_Kusama_wax_model_Louis_Vuitton.jpg", "lecture": "Presentation changes how art is understood. Sequence can show growth, contrast, or recurring interests. Captions give context without overwhelming the image. Your exhibition should make one argument: this is how I grew as an artist this year.", "assignment": "Assemble a chronological digital portfolio and present it to your homeschool evaluator or family audience.", "steps": ["Choose 10–15 finished works plus 4–6 process images.", "Sequence them so growth is visible.", "Add title, medium, date, and 1–2 sentence caption to major works.", "Place your artist statement near the final portrait.", "Present for 5–8 minutes and answer questions."], "check": ["10–15 finished works included.", "Process evidence included.", "Captions are consistent.", "Artist statement included.", "Presentation completed."], "time": "2–4 hours", "materials": "Digital slide/presentation tool, photographed portfolio"}];

const grid = document.getElementById('weekGrid');
const search = document.getElementById('search');
const tabs = [...document.querySelectorAll('.tab')];
const dialog = document.getElementById('weekDialog');
const dialogContent = document.getElementById('dialogContent');
const progressDialog = document.getElementById('progressDialog');
let activeQuarter = 'all';

const getDone = () => JSON.parse(localStorage.getItem('artAcademyDone') || '[]');
const setDone = (arr) => localStorage.setItem('artAcademyDone', JSON.stringify(arr));

function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}

function renderInfo(){
  document.getElementById('grading').innerHTML = COURSE.grading.map(x=>`<div class="grade-row"><span>${esc(x[0])}</span><strong>${x[1]}</strong></div>`).join('');
  document.getElementById('materials').innerHTML = COURSE.materials.map(x=>`<li>${esc(x)}</li>`).join('');
}

function renderWeeks(){
  const q = search.value.trim().toLowerCase();
  const done = getDone();
  const filtered = WEEKS.filter(w => (activeQuarter==='all'||String(w.quarter)===activeQuarter) && (!q || [w.title,w.artist,w.focus,w.assignment].join(' ').toLowerCase().includes(q)));
  grid.innerHTML = filtered.map(w=>`
    <article class="week-card ${done.includes(w.week)?'done':''}" data-week="${w.week}" tabindex="0">
      <div class="week-top"><span class="week-num">WEEK ${String(w.week).padStart(2,'0')} · Q${w.quarter}</span><span class="done-dot">${done.includes(w.week)?'✓':''}</span></div>
      <h3>${esc(w.title)}</h3><p>${esc(w.focus)}</p>
      <div class="artist-line"><span>Featured artist</span><b>${esc(w.artist)}</b></div>
    </article>`).join('') || '<p>No weeks match that search.</p>';
  grid.querySelectorAll('.week-card').forEach(card=>{
    card.addEventListener('click',()=>openWeek(+card.dataset.week));
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')openWeek(+card.dataset.week)})
  });
}


function learningPack(w){
  if(w.week===1){
    return {
      objectives: WEEK1_LEARNING.objectives,
      vocabulary: WEEK1_LEARNING.vocabulary,
      notices: WEEK1_LEARNING.notices,
      borrow: "Use the seven elements as a checklist whenever you analyze or design an artwork.",
      reflection: "Which element do you naturally notice first, and which one do you usually overlook?",
      quiz: [
        ["What are the seven Elements of Art?","Line, shape, color, value, form, texture, and space."],
        ["Which element describes lightness and darkness?","Value."],
        ["Which element describes the area around, between, and within forms?","Space."]
      ],
      demo: ["Plan seven clear spaces.","Make each example visually demonstrate its element.","Use more than one medium.","Write one sentence explaining the visual effect."]
    };
  }
  const pack=LESSON_PACKS[w.week];
  if(!pack){
    return {objectives:[],vocabulary:[],notices:[],borrow:"",reflection:"",quiz:[],demo:w.steps.slice(0,4)};
  }
  // Week 2–36 source packs use the shorter `vocab` key. Normalize it here
  // so every lesson uses the same rendering contract as Week 1.
  return {...pack,vocabulary:pack.vocabulary || pack.vocab || []};
}

function universalObjectives(w,p){
  if(p.objectives && p.objectives.length) return p.objectives;
  return [
    `Explain the key idea behind ${w.title.toLowerCase()}.`,
    `Identify the technique in ${w.artist}'s work.`,
    `Apply the technique independently in this week's studio assignment.`,
    `Evaluate your result using the finish checklist and reflection prompt.`
  ];
}

function universalRubric(w){
  return [
    ["4 · Advanced",`The work fully meets the assignment, shows strong control of ${w.focus.toLowerCase()}, and includes thoughtful refinement beyond the minimum.`],
    ["3 · Proficient","The assignment is complete, accurate to the week's technique, carefully made, and meets all finish-checklist items."],
    ["2 · Developing","The main idea is present, but one or more technical requirements are inconsistent, incomplete, or rushed."],
    ["1 · Beginning","The work is substantially incomplete or does not yet demonstrate the week's core technique."]
  ];
}

function artworkImage(w){
  // Keep Week 3's required reference inside this course so it cannot be
  // blocked, renamed, or removed by an external image host.
  if(w.week===3) return 'assets/igor-stravinsky-picasso.jpg';
  return w.image;
}

function openWeek(num){
  localStorage.setItem('artAcademyLastWeek', String(num));
  const w=WEEKS.find(x=>x.week===num), done=getDone().includes(num);
  const p=learningPack(w);
  const objectives=universalObjectives(w,p);
  const rubric=universalRubric(w);
  const imageSrc=artworkImage(w);

  dialogContent.innerHTML=`
    <div class="dialog-hero">
      <div class="dialog-hero-copy">
        <span class="eyebrow">WEEK ${String(w.week).padStart(2,'0')} · QUARTER ${w.quarter}</span>
        <h2>${esc(w.title)}</h2>
        <p>${esc(w.focus)}</p>
        <div class="meta-row"><span class="meta-chip">⏱ ${esc(w.time)}</span><span class="meta-chip">Artist · ${esc(w.artist)}</span></div>
      </div>
      <div class="dialog-image">
        <img src="${imageSrc}" alt="${esc(w.work)} by ${esc(w.artist)}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
        <div class="fallback">${esc(w.work)}<br><small>${esc(w.artist)}</small></div>
      </div>
    </div>

    <div class="dialog-body">
      <section class="lesson-section artist-lens">
        <span class="lesson-kicker">MEET THE ARTIST</span>
        <div class="artist-box">
          <div><span class="artist-meta">FEATURED ARTIST</span><h3>${esc(w.artist)}</h3><div>${esc(w.artistYears)}</div></div>
          <div>
            <p><strong>What made this artist matter:</strong> ${esc(w.why)}</p>
            <p><strong>Masterwork:</strong> <em>${esc(w.work)}</em></p>
            <div class="borrow-box"><strong>Borrow this idea</strong><p>${esc(p.borrow)}</p></div>
          </div>
        </div>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">TODAY'S TARGET</span>
        <h3>By the end of this lesson, you can…</h3>
        <ul class="objectives-list">${objectives.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">VISUAL VOCABULARY</span>
        <h3>Words artists actually use</h3>
        <div class="vocab-grid">${p.vocabulary.map(v=>`
          <article class="vocab-card"><b>${esc(v[0])}</b><p>${esc(v[1])}</p></article>`).join('')}</div>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">LOOK CLOSER</span>
        <h3>What to notice in the masterwork</h3>
        <div class="look-closer">
          <div class="look-image">
            <img src="${imageSrc}" alt="${esc(w.work)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false">
            <div class="look-fallback" hidden><strong>${esc(w.work)}</strong><small>Artwork reference unavailable</small></div>
          </div>
          <div class="notice-grid">${p.notices.map(n=>`
            <article class="notice-card"><strong>${esc(n[0])}</strong><p>${esc(n[1])}</p></article>`).join('')}</div>
        </div>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">MINI LECTURE</span>
        <h3>What you need to understand</h3>
        <p>${esc(w.lecture)}</p>
        <div class="teacher-note"><strong>Before you move on</strong> Find one specific place in the featured artwork that demonstrates today's main idea. Say what you see out loud in one complete sentence.</div>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">GUIDED PRACTICE</span>
        <h3>How to approach the studio work</h3>
        <div class="demo-strip">${p.demo.map((d,i)=>`
          <div class="demo-step"><span>STEP ${i+1}</span><b>${esc(d)}</b></div>`).join('')}</div>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">QUICK CHECK</span>
        <h3>Make sure the idea clicked</h3>
        <div class="quiz-list">${p.quiz.map((qa,i)=>`
          <details class="quiz-item"><summary>${i+1}. ${esc(qa[0])}</summary><p>${esc(qa[1])}</p></details>`).join('')}</div>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">STUDIO ASSIGNMENT</span>
        <h3>What you'll make</h3>
        <p class="assignment-lead">${esc(w.assignment)}</p>
        <div class="meta-row"><span class="meta-chip">⏱ ${esc(w.time)}</span><span class="meta-chip">${esc(w.materials)}</span></div>
        <div class="assignment-box"><h3>Studio steps</h3><ol>${w.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">SELF-ASSESS</span>
        <h3>Success checklist</h3>
        <div class="success-grid">
          ${w.check.map((x,i)=>`<label class="check-card"><input type="checkbox" data-week-check="${w.week}-${i}"><span>${esc(x)}</span></label>`).join('')}
        </div>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">RUBRIC</span>
        <h3>How this work will be evaluated</h3>
        <div class="rubric-grid">${rubric.map(r=>`
          <article class="rubric-card"><strong>${esc(r[0])}</strong><p>${esc(r[1])}</p></article>`).join('')}</div>
      </section>

      <section class="lesson-section">
        <span class="lesson-kicker">REFLECT</span>
        <h3>One question before you finish</h3>
        <div class="reflection-card">
          <p>${esc(p.reflection)}</p>
          <textarea data-reflection="${w.week}" rows="4" placeholder="Type your reflection here…"></textarea>
          <small>Saved automatically on this device.</small>
        </div>
      </section>

      <button class="complete-btn ${done?'completed':''}" data-complete="${w.week}">${done?'✓ Week complete':'Mark this week complete'}</button>

      <div class="lesson-nav">
        <button type="button" data-prev="${w.week-1}" ${w.week===1?'disabled':''}>← Previous week</button>
        <button class="next" type="button" data-next="${w.week+1}" ${w.week===36?'disabled':''}>Next week →</button>
      </div>
    </div>`;

  if(!dialog.open) dialog.showModal();
  restoreLessonState(w.week);

  dialogContent.querySelector('[data-complete]').addEventListener('click', e=>toggleDone(+e.currentTarget.dataset.complete));
  const prev=dialogContent.querySelector('[data-prev]');
  const next=dialogContent.querySelector('[data-next]');
  if(prev && !prev.disabled) prev.addEventListener('click',()=>openWeek(+prev.dataset.prev));
  if(next && !next.disabled) next.addEventListener('click',()=>openWeek(+next.dataset.next));
  dialogContent.querySelectorAll('[data-week-check]').forEach(el=>el.addEventListener('change',saveLessonState));
  const reflection=dialogContent.querySelector('[data-reflection]');
  if(reflection) reflection.addEventListener('input',saveLessonState);
}

function lessonState(){
  return JSON.parse(localStorage.getItem('artAcademyLessonState') || '{}');
}

function saveLessonState(){
  const state=lessonState();
  dialogContent.querySelectorAll('[data-week-check]').forEach(el=>{state[el.dataset.weekCheck]=el.checked;});
  const reflection=dialogContent.querySelector('[data-reflection]');
  if(reflection) state['reflection-'+reflection.dataset.reflection]=reflection.value;
  localStorage.setItem('artAcademyLessonState',JSON.stringify(state));
}

function restoreLessonState(week){
  const state=lessonState();
  dialogContent.querySelectorAll('[data-week-check]').forEach(el=>{el.checked=!!state[el.dataset.weekCheck];});
  const reflection=dialogContent.querySelector('[data-reflection]');
  if(reflection) reflection.value=state['reflection-'+week] || '';
}

function toggleDone(num){
  let done=getDone();
  const wasDone=done.includes(num);
  done=wasDone?done.filter(x=>x!==num):[...done,num].sort((a,b)=>a-b);
  setDone(done);
  renderWeeks();
  updateDashboard();
  if(!wasDone && num < WEEKS.length) openWeek(num+1);
  else openWeek(num);
}

function updateProgress(){
  const done=getDone();
  const pct=Math.round(done.length/WEEKS.length*100);
  document.getElementById('progressPct').textContent=pct+'%';
  document.getElementById('progressBar').style.width=pct+'%';

  const quarterSummary=document.getElementById('quarterSummary');
  if(quarterSummary){
    quarterSummary.innerHTML=[1,2,3,4].map(q=>{
      const weeks=WEEKS.filter(w=>w.quarter===q);
      const finished=weeks.filter(w=>done.includes(w.week)).length;
      const qpct=Math.round(finished/weeks.length*100);
      return `<article><span>Quarter ${q}</span><strong>${finished}/${weeks.length}</strong><small>${qpct}% complete</small></article>`;
    }).join('');
  }

  document.getElementById('progressList').innerHTML=WEEKS.map(w=>
    `<div class="progress-item ${done.includes(w.week)?'done':''}">
      <span>W${w.week}</span> · ${esc(w.title)}
    </div>`).join('');
}

tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');activeQuarter=t.dataset.quarter;renderWeeks();}));
search.addEventListener('input',renderWeeks);
document.querySelector('#weekDialog .dialog-close').addEventListener('click',()=>dialog.close());
document.querySelector('.progress-close').addEventListener('click',()=>progressDialog.close());
document.getElementById('progressBtn').addEventListener('click',()=>{updateProgress();progressDialog.showModal();});
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
progressDialog.addEventListener('click',e=>{if(e.target===progressDialog)progressDialog.close()});


function printProgressReport(){
  const done=getDone();
  const lesson=lessonState();
  const completed=WEEKS.filter(w=>done.includes(w.week));
  const reflections=WEEKS
    .map(w=>({week:w.week,title:w.title,text:lesson['reflection-'+w.week]||''}))
    .filter(x=>x.text.trim());

  const quarters=[1,2,3,4].map(q=>{
    const weeks=WEEKS.filter(w=>w.quarter===q);
    const finished=weeks.filter(w=>done.includes(w.week)).length;
    return {q,finished,total:weeks.length};
  });

  const report=window.open('','_blank');
  if(!report) return;

  const quarterHtml=quarters.map(x=>
    `<tr><td>Quarter ${x.q}</td><td>${x.finished} / ${x.total}</td><td>${Math.round(x.finished/x.total*100)}%</td></tr>`
  ).join('');

  const completedHtml=completed.length
    ? completed.map(w=>`<li>Week ${w.week}: ${esc(w.title)}</li>`).join('')
    : '<li>No weeks marked complete yet.</li>';

  const reflectionHtml=reflections.length
    ? reflections.map(r=>`<section><h3>Week ${r.week}: ${esc(r.title)}</h3><p>${esc(r.text)}</p></section>`).join('')
    : '<p>No saved reflections yet.</p>';

  report.document.write(`<!doctype html>
<html><head><meta charset="utf-8"><title>Art Academy TLC Progress Report</title>
<style>
body{font-family:Arial,sans-serif;color:#222;margin:40px;line-height:1.45}
h1{font-family:Georgia,serif;font-size:34px;margin-bottom:4px}
h2{font-family:Georgia,serif;margin-top:30px;border-bottom:1px solid #bbb;padding-bottom:6px}
h3{font-size:15px;margin-bottom:4px}
.meta{color:#666;margin-bottom:25px}
.summary{font-size:22px;margin:18px 0}
table{border-collapse:collapse;width:100%;max-width:650px}
th,td{border:1px solid #bbb;padding:8px;text-align:left}
ul{columns:2;column-gap:35px;padding-left:20px}
section{break-inside:avoid;margin-bottom:16px}
footer{margin-top:40px;border-top:1px solid #bbb;padding-top:14px;color:#666;font-size:12px}
@media print{body{margin:18mm}button{display:none}}
</style></head><body>
<h1>Art Academy TLC</h1>
<div class="meta">Visual Arts 1 · 36-Week Studio Course · Student: Leilani · 2026–27</div>
<div class="summary"><strong>${completed.length} of 36 weeks complete</strong> (${Math.round(completed.length/36*100)}%)</div>
<h2>Quarter progress</h2>
<table><thead><tr><th>Quarter</th><th>Weeks complete</th><th>Progress</th></tr></thead><tbody>${quarterHtml}</tbody></table>
<h2>Completed lessons</h2><ul>${completedHtml}</ul>
<h2>Saved reflections</h2>${reflectionHtml}
<footer>Generated from the student's local Art Academy TLC progress data.</footer>
<script>window.onload=()=>window.print();<\/script>
</body></html>`);
  report.document.close();
}

function updateDashboard(){
  const done=getDone();
  const pct=Math.round(done.length/WEEKS.length*100);
  const nextWeek=WEEKS.find(w=>!done.includes(w.week)) || WEEKS[WEEKS.length-1];
  const lastOpened=Number(localStorage.getItem('artAcademyLastWeek') || 0);
  const resumeWeek=(lastOpened && !done.includes(lastOpened) && WEEKS.some(w=>w.week===lastOpened))
    ? WEEKS.find(w=>w.week===lastOpened)
    : nextWeek;
  const pctEl=document.getElementById('dashboardPct');
  if(pctEl) pctEl.textContent=pct+'%';
  const title=document.getElementById('welcomeTitle');
  const copy=document.getElementById('welcomeCopy');
  const btn=document.getElementById('continueBtn');
  const heroBtn=document.getElementById('heroContinueBtn');
  if(!title || !copy || !btn) return;

  if(done.length===0){
    title.textContent='Welcome, Leilani. Start with Week 1.';
    copy.textContent='Your first lesson introduces the seven Elements of Art and shows you how Kandinsky used them to make abstract art feel alive.';
    btn.textContent='Start Week 1';
  } else if(done.length===WEEKS.length){
    title.textContent='Course complete — portfolio time.';
    copy.textContent='You completed all 36 weeks. Open Week 36 to review your final exhibition checklist.';
    btn.textContent='Open Week 36';
  } else {
    title.textContent=`Welcome back, Leilani — Week ${resumeWeek.week} is ready.`;
    copy.textContent=resumeWeek.focus;
    btn.textContent=`Continue Week ${resumeWeek.week}`;
  }
  btn.onclick=()=>openWeek(done.length===WEEKS.length ? 36 : resumeWeek.week);
  if(heroBtn){
    const target=done.length===WEEKS.length ? 36 : resumeWeek.week;
    heroBtn.textContent=done.length ? `Continue Week ${target}` : 'Start Week 1';
    heroBtn.onclick=()=>openWeek(target);
  }
}


function setupWeekNavigation(){
  const select=document.getElementById('weekSelect');
  if(select){
    select.innerHTML='<option value="">Choose Week 1–36…</option>'+WEEKS.map(w=>
      `<option value="${w.week}">Week ${w.week}: ${esc(w.title)}</option>`
    ).join('');
    select.addEventListener('change',()=>{
      if(select.value) openWeek(Number(select.value));
      select.value='';
    });
  }
  document.querySelectorAll('[data-open-week]').forEach(button=>{
    button.addEventListener('click',()=>openWeek(Number(button.dataset.openWeek)));
  });
}

document.getElementById('printReportBtn')?.addEventListener('click', printProgressReport);
document.getElementById('resetProgressBtn')?.addEventListener('click',()=>{
  if(confirm('Reset all completed-week checks on this device?')){
    setDone([]);
    renderWeeks();
    updateProgress();
    updateDashboard();
  }
});
renderInfo(); renderWeeks(); setupWeekNavigation(); updateDashboard();
