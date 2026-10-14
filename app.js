const FRAME_CATALOG = [
  { id: "classic-white", name: "Classic white", category: "Classic", layout: "classic-white", background: "#f1e3d1", accent: "#786b5e", ink: "#29251f", label: "little moments ♡", title: "CLASSIC WHITE", design: "classic-white" },
  { id: "milk-tea", name: "Milk tea", category: "Classic", layout: "strip", background: "#fffaf2", accent: "#bd8b74", ink: "#544b43", label: "soft & simple" },
  { id: "midnight", name: "Midnight", category: "Classic", layout: "strip", background: "#292a2e", accent: "#f1e9dc", ink: "#faf5ed", label: "after hours" },
  { id: "film-roll", name: "Film roll", category: "Classic", layout: "strip", background: "#f6f2e8", accent: "#1e1d1b", ink: "#393633", label: "little memories" },
  { id: "old-soul", name: "Old soul", category: "Classic", layout: "polaroid", background: "#eee4d4", accent: "#9e7653", ink: "#4f4437", label: "a day to remember" },
  { id: "seoul-days", name: "Seoul days", category: "K-inspired", layout: "strip", background: "#fffdf8", accent: "#e9988c", ink: "#56514d", label: "오늘의 우리" },
  { id: "cloud-room", name: "Cloud room", category: "K-inspired", layout: "strip", background: "#e8f2f5", accent: "#7c9caa", ink: "#445865", label: "somewhere soft" },
  { id: "cherry-pop", name: "Cherry pop", category: "Cute", layout: "strip", background: "#fbe7e8", accent: "#d94f67", ink: "#713940", label: "sweet little things" },
  { id: "lavender-sky", name: "Lavender sky", category: "Cute", layout: "strip", background: "#eee9f7", accent: "#907bb9", ink: "#514866", label: "you make me bloom" },
  { id: "daisy-chain", name: "Daisy chain", category: "Cute", layout: "polaroid", background: "#f6f3df", accent: "#d8ad50", ink: "#665b3c", label: "pick me, sunshine" },
  { id: "sweethearts", name: "Sweethearts", category: "Couple", layout: "strip", background: "#fae6e5", accent: "#d5767d", ink: "#683e48", label: "you + me" },
  { id: "love-notes", name: "Love notes", category: "Couple", layout: "polaroid", background: "#f9f3ed", accent: "#bd7770", ink: "#5f4944", label: "my favorite person" },
  { id: "besties", name: "Besties", category: "Friends", layout: "grid", background: "#e8f0e5", accent: "#749170", ink: "#425744", label: "better together" },
  { id: "birthday-club", name: "Birthday club", category: "Friends", layout: "strip", background: "#f9e9d9", accent: "#df8d60", ink: "#704b39", label: "make a wish" },
  { id: "sunny-days", name: "Sunny days", category: "Seasonal", layout: "strip", background: "#f9edc8", accent: "#d39939", ink: "#655537", label: "here comes the sun" },
  { id: "winter-postcard", name: "Winter post", category: "Seasonal", layout: "polaroid", background: "#e8eef0", accent: "#718c99", ink: "#45545c", label: "warm wishes" },
  { id: "soft-focus", name: "Soft focus", category: "Aesthetic", layout: "strip", background: "#f0eae0", accent: "#a89a84", ink: "#514a42", label: "in the in-between" },
  { id: "editorial", name: "Editorial", category: "Aesthetic", layout: "grid", background: "#f5f3ee", accent: "#282724", ink: "#2f2d29", label: "STUDIO No. 01" },
  { id: "comic-club", name: "Comic club", category: "Playful", layout: "grid", background: "#f7edaa", accent: "#ec695d", ink: "#413b31", label: "POW! good times" },
  { id: "little-party", name: "Little party", category: "Playful", layout: "strip", background: "#f1e6f0", accent: "#a778a4", ink: "#554355", label: "tiny joys, big smiles" },
  { id: "christmas-glow", name: "Christmas glow", category: "Seasonal", layout: "strip", background: "#f7eee4", accent: "#a84d48", ink: "#493a34", label: "merry little moments", motif: "❋", detail: "#57765a" },
  { id: "spooky-sweet", name: "Spooky sweet", category: "Seasonal", layout: "strip", background: "#302a38", accent: "#f4a267", ink: "#fff0dc", label: "boo, you look cute", motif: "✦", detail: "#a98ac1" },
  { id: "autumn-postcard", name: "Autumn postcard", category: "Seasonal", layout: "polaroid", background: "#f3e1cc", accent: "#ad6545", ink: "#594338", label: "falling for this day", motif: "❧", detail: "#dbad6e" },
  { id: "spring-bloom", name: "Spring bloom", category: "Seasonal", layout: "strip", background: "#f8edf0", accent: "#cc8294", ink: "#59404b", label: "hello, spring", motif: "✿", detail: "#8caa78" },
  { id: "valentine-post", name: "Valentine post", category: "Couple", layout: "polaroid", background: "#f8e4e2", accent: "#b74d5d", ink: "#613c45", label: "sealed with a kiss", motif: "♥", detail: "#e7a0a1" },
  { id: "just-married", name: "Just married", category: "Events", layout: "polaroid", background: "#f5f1e8", accent: "#9c8765", ink: "#51483d", label: "and so it begins", motif: "❀", detail: "#d4c4a5" },
  { id: "grad-moments", name: "Grad moments", category: "Events", layout: "strip", background: "#e9e7f0", accent: "#5d507d", ink: "#383247", label: "the world is yours", motif: "✦", detail: "#c4a75b" },
  { id: "confetti-club", name: "Confetti club", category: "Events", layout: "grid", background: "#fff1df", accent: "#e27963", ink: "#56423a", label: "a reason to celebrate", motif: "✳", detail: "#80a7a1" },
  { id: "passport-stamp", name: "Passport stamp", category: "Travel", layout: "polaroid", background: "#e9efe7", accent: "#607f68", ink: "#374a3d", label: "wish you were here", motif: "✈", detail: "#c47d62" },
  { id: "postcard-days", name: "Postcard days", category: "Travel", layout: "strip", background: "#e8f0f4", accent: "#62869a", ink: "#3e5663", label: "greetings from somewhere", motif: "☼", detail: "#df9979" },
  { id: "tropical-break", name: "Tropical break", category: "Travel", layout: "strip", background: "#e3f0e8", accent: "#388879", ink: "#345a50", label: "out of office", motif: "❋", detail: "#e5a55e" },
  { id: "disco-dream", name: "Disco dream", category: "Playful", layout: "grid", background: "#292637", accent: "#e8a8db", ink: "#fff4fc", label: "dance like nobody's watching", motif: "✧", detail: "#91c9db" },
  { id: "y2k-diary", name: "Y2K diary", category: "Aesthetic", layout: "strip", background: "#eee8f7", accent: "#8266bd", ink: "#46375f", label: "xoxo from the future", motif: "☆", detail: "#d881b1" },
  { id: "blue-hour", name: "Blue hour", category: "Aesthetic", layout: "polaroid", background: "#dfe7f1", accent: "#596e9d", ink: "#34405e", label: "somewhere after sunset", motif: "☾", detail: "#d7b678" },
  { id: "checker-day", name: "Checker day", category: "Playful", layout: "strip", background: "#fff8eb", accent: "#df765f", ink: "#51433b", label: "no thoughts, just fun", motif: "✷", detail: "#72968b", design: "checker" },
  { id: "wildflower", name: "Wildflower", category: "Nature", layout: "polaroid", background: "#f4efda", accent: "#b66e82", ink: "#514548", label: "let yourself grow", motif: "✿", detail: "#7f9c69", design: "botanical" },
  { id: "citrus-club", name: "Citrus club", category: "Nature", layout: "strip", background: "#fff1cf", accent: "#e28a3e", ink: "#594832", label: "a zest for life", motif: "✹", detail: "#749451", design: "citrus" },
  { id: "rainbow-day", name: "Rainbow day", category: "Cute", layout: "strip", background: "#fbebdf", accent: "#dd8880", ink: "#5b4641", label: "after every rain", motif: "♡", detail: "#d5a05f", design: "rainbow" },
  { id: "scrapbook-club", name: "Scrapbook club", category: "Playful", layout: "polaroid", background: "#f3e7d8", accent: "#9d6e55", ink: "#51443c", label: "collected moments", motif: "✂", detail: "#72928c", design: "tape" },
  { id: "neon-night", name: "Neon night", category: "Aesthetic", layout: "strip", background: "#211e33", accent: "#f18bc4", ink: "#fff3fb", label: "meet me after dark", motif: "✦", detail: "#79dbdf", design: "neon" },
  { id: "ocean-club", name: "Ocean club", category: "Travel", layout: "strip", background: "#e2f1ef", accent: "#418f91", ink: "#365c61", label: "sea you soon", motif: "〰", detail: "#e0a987", design: "waves" },
  { id: "garden-party", name: "Garden party", category: "Events", layout: "grid", background: "#f7eee3", accent: "#a96e7a", ink: "#56464b", label: "bloom where you are", motif: "❀", detail: "#7c9870", design: "botanical" },
  { id: "golden-hour", name: "Golden hour", category: "Aesthetic", layout: "polaroid", background: "#f5e4c9", accent: "#bb7846", ink: "#594538", label: "chasing the light", motif: "☼", detail: "#dfaa61", design: "sunburst" },
  { id: "little-star", name: "Little star", category: "Cute", layout: "strip", background: "#e9e9f7", accent: "#777bb6", ink: "#41425f", label: "made of stardust", motif: "✦", detail: "#d4a8ca", design: "stars" },
  { id: "art-school", name: "Art school", category: "Aesthetic", layout: "grid", background: "#f1eee6", accent: "#49677c", ink: "#39444b", label: "portrait of a day", motif: "◌", detail: "#cf805d", design: "geometry" },
  { id: "postage-love", name: "Postage love", category: "Couple", layout: "polaroid", background: "#f8ece3", accent: "#ad5f61", ink: "#5a4140", label: "wish you were here", motif: "♡", detail: "#889889", design: "postage" },
  { id: "retro-soda", name: "Retro soda", category: "Playful", layout: "strip", background: "#dff0ed", accent: "#d76656", ink: "#435652", label: "pop! goes the day", motif: "✹", detail: "#e8b64f", design: "sunburst" },
  { id: "sepia-story", name: "Sepia story", category: "Vintage", layout: "polaroid", background: "#e9dbc5", accent: "#97704f", ink: "#4a4035", label: "a little piece of forever", motif: "❧", detail: "#c1a37c", design: "vintage-paper" },
  { id: "super-eight", name: "Super eight", category: "Vintage", layout: "strip", background: "#25231f", accent: "#d9c49a", ink: "#f8efdd", label: "reel memories", motif: "◉", detail: "#b97854", design: "film-frame" },
  { id: "faded-postcard", name: "Faded postcard", category: "Vintage", layout: "polaroid", background: "#eee2d2", accent: "#a77963", ink: "#55453b", label: "wish you were here", motif: "✉", detail: "#829184", design: "postage" },
  { id: "sepia-daisies", name: "Sepia daisies", category: "Vintage", layout: "strip", background: "#efe7d3", accent: "#987f4f", ink: "#51483b", label: "days like these", motif: "✿", detail: "#819068", design: "botanical" },
  { id: "analog-contact", name: "Analog contact", category: "Vintage", layout: "grid", background: "#272621", accent: "#e1d7b9", ink: "#f5eddc", label: "CONTACT SHEET · 04", motif: "▧", detail: "#c7825d", design: "film-frame" },
  { id: "golden-negative", name: "Golden negative", category: "Vintage", layout: "strip", background: "#d9c294", accent: "#564831", ink: "#403727", label: "light leaks & laughter", motif: "☼", detail: "#f1e5c9", design: "vintage-paper" },
];
const CATEGORIES = ["All looks", ...new Set(FRAME_CATALOG.map((frame) => frame.category))];
const FILTERS = {
  original: "",
  mono: "grayscale(1)",
  noir: "grayscale(1) contrast(1.38) brightness(.91)",
  fade: "saturate(.68) contrast(.84) brightness(1.12)",
  warm: "sepia(.18) saturate(1.16)",
  honey: "sepia(.34) saturate(1.24) brightness(1.06)",
  cool: "hue-rotate(12deg) saturate(.9)",
  arctic: "hue-rotate(25deg) saturate(.8) brightness(1.05)",
  vintage: "sepia(.28) contrast(.92) saturate(.8)",
  film: "sepia(.16) saturate(.86) contrast(1.12) brightness(.96)",
  pastel: "saturate(.78) brightness(1.08) contrast(.9)",
  pink: "sepia(.12) hue-rotate(320deg) saturate(1.15)",
  rose: "sepia(.22) hue-rotate(315deg) saturate(1.12) brightness(1.04)",
  dreamy: "brightness(1.08) saturate(.85) blur(.25px)",
  glow: "brightness(1.14) saturate(1.08) contrast(.92)",
  cinematic: "contrast(1.18) saturate(.86)",
  matte: "contrast(.82) brightness(1.06) saturate(.78)",
  sepia: "sepia(.85)",
  retro: "sepia(.22) saturate(1.35) contrast(1.05)",
  pop: "saturate(1.55) contrast(1.12)",
  mint: "hue-rotate(300deg) saturate(.72) brightness(1.05)",
  lavender: "hue-rotate(28deg) saturate(.86) brightness(1.06)",
  sunset: "sepia(.25) hue-rotate(342deg) saturate(1.28) brightness(1.03)",
  espresso: "sepia(.48) saturate(.86) contrast(1.16) brightness(.88)",
  negative: "invert(1) hue-rotate(180deg) saturate(.75)",
  "analog-film": "sepia(.3) saturate(.78) contrast(.94) brightness(1.04)",
  disposable: "sepia(.1) saturate(1.24) contrast(1.13) brightness(1.06)",
  "instant-print": "sepia(.19) saturate(.72) contrast(.86) brightness(1.1)",
  grainy: "saturate(.82) contrast(1.08)",
  "light-leak": "sepia(.2) saturate(1.24) brightness(1.08)",
  "soft-flash": "brightness(1.13) contrast(.92) saturate(.92)",
  "cross-process": "hue-rotate(335deg) saturate(1.3) contrast(1.08)",
};
const FILM_EFFECTS = {
  "analog-film": { grain: .12, vignette: .22 },
  disposable: { grain: .18, vignette: .12, leak: .13 },
  "instant-print": { grain: .08, vignette: .1 },
  grainy: { grain: .25 },
  "light-leak": { grain: .07, leak: .32 },
  "cross-process": { grain: .1, vignette: .12 },
};
const DB_NAME = "little-moments-studio";
const DB_VERSION = 1;
const DEFAULT_FAVORITES = ["milk-tea", "seoul-days", "cherry-pop"];

const $ = (selector) => document.querySelector(selector);
const ui = {
  categoryTabs: $("#categoryTabs"), frameGallery: $("#frameGallery"), photoCount: $("#photoCount"),
  timerSelect: $("#timerSelect"), cameraSelect: $("#cameraSelect"), cameraFilter: $("#cameraFilter"), cameraVideo: $("#cameraVideo"),
  cameraStage: $("#cameraStage"), cameraPlaceholder: $("#cameraPlaceholder"), livePill: $("#livePill"),
  cameraError: $("#cameraError"), captureButton: $("#captureButton"), captureButtonText: $("#captureButtonText"),
  cameraToggle: $("#cameraToggle"), mirrorButton: $("#mirrorButton"), countdown: $("#countdownOverlay"),
  flash: $("#flashOverlay"), progressLabel: $("#progressLabel"), progressBar: $("#progressBar"),
  photoUpload: $("#photoUpload"), phoneCameraUpload: $("#phoneCameraUpload"),
  photoReview: $("#photoReview"), photoThumbnails: $("#photoThumbnails"),
  canvas: $("#photoCanvas"), canvasWrap: $("#canvasWrap"), emptyCanvas: $("#emptyCanvasMessage"),
  previewResolution: $("#previewResolution"), filterSelect: $("#filterSelect"), filterTarget: $("#filterTarget"), footerInput: $("#footerInput"),
  frameColor: $("#frameColor"), brightness: $("#brightness"), contrast: $("#contrast"),
  saturation: $("#saturation"), brightnessValue: $("#brightnessValue"), contrastValue: $("#contrastValue"),
  saturationValue: $("#saturationValue"), captionInput: $("#captionInput"), toast: $("#toast"),
  galleryCount: $("#galleryCount"), galleryFilters: $("#galleryFilters"), gallerySearch: $("#gallerySearch"),
  savedGrid: $("#savedGrid"), galleryEmpty: $("#galleryEmpty"), sessionLabel: $("#sessionLabel"),
  mirrorSetting: $("#mirrorSetting"), soundSetting: $("#soundSetting"), favoritesSetting: $("#favoritesSetting"),
  settingsModal: $("#settingsModal"),
};
const context = ui.canvas.getContext("2d", { alpha: false });
const state = {
  frameId: "milk-tea", category: "All looks", photoCount: 4, timer: 5, photos: [], workflowStep: 1,
  cameraStream: null, cameraId: "", cameraFilter: "original", mirrored: true, filter: "original", filterTarget: "all",
  pendingPhoneReplacement: null,
  brightness: 100, contrast: 100, saturation: 100, frameColor: null,
  footer: ui.footerInput.value, decorations: [], selectedDecoration: null,
  favorites: loadJSON("lm-favorites", DEFAULT_FAVORITES), settings: loadJSON("lm-settings", { mirror: true, sound: false, saveFavorites: true }),
  sessions: [], galleryFilter: "all", galleryQuery: "", captureBusy: false,
  undoStack: [], redoStack: [], pointerDecoration: null, objectUrls: new Set(),
};
let dbPromise;
let toastTimer;
const WORKFLOW_COPY = {
  1: "Choose a frame and photo count, then preview your strip before picture time.",
  2: "Your look is ready. Take your photos or add pictures from your device.",
  3: "Your photos are ready. Adjust individual looks, add finishing touches, then print or save to your gallery.",
};

function loadJSON(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    console.warn(`Could not load ${key} from local storage.`, error);
    return fallback;
  }
}
function persistJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (error) { showToast("Browser settings could not be saved. Your photos are still available."); }
}
function currentFrame() { return FRAME_CATALOG.find((frame) => frame.id === state.frameId) || FRAME_CATALOG[0]; }
function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ui.toast.classList.remove("visible"), 2800);
}
function setWorkflowStep(step, { scroll = true } = {}) {
  const nextStep = Math.max(1, Math.min(3, Number(step)));
  if (nextStep === 3 && !state.photos.length) {
    showToast("Take or add at least one photo before moving to print and save.");
    return false;
  }
  state.workflowStep = nextStep;
  $("#studioView").dataset.workflowStep = String(nextStep);
  $("#workflowContext").textContent = WORKFLOW_COPY[nextStep];
  document.querySelectorAll(".workflow-step").forEach((button) => {
    const buttonStep = Number(button.dataset.workflowStep);
    button.classList.toggle("active", buttonStep === nextStep);
    button.classList.toggle("complete", buttonStep < nextStep);
    if (buttonStep === nextStep) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
  $("#previewStepNumber").textContent = nextStep === 1 ? "01" : "03";
  $("#previewHeadingText").textContent = nextStep === 1 ? "Customize your strip" : "Make it yours";
  $("#previewEyebrow").textContent = nextStep === 1 ? "FRAME PREVIEW" : "YOUR PREVIEW";
  $("#previewHint").textContent = nextStep === 1
    ? "Your selected frame updates here · choose a photo count to check the layout"
    : "✦ Drag stickers and text to move them around";
  $("#emptyCanvasMessage").hidden = state.photos.length > 0 || nextStep === 1;
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}
function setCaptureProgress(done, total, label) {
  ui.progressLabel.textContent = label;
  ui.progressBar.style.width = `${total ? Math.round(done / total * 100) : 0}%`;
}
function ownedUrl(blob) {
  const url = URL.createObjectURL(blob);
  state.objectUrls.add(url);
  return url;
}
function forgetUrl(url) {
  if (url && state.objectUrls.delete(url)) URL.revokeObjectURL(url);
}
function imageFromBlob(blob) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("This image could not be opened."));
    image.src = ownedUrl(blob);
    image._studioUrl = image.src;
  });
}
function forgetPhoto(photo) {
  if (photo?.url) forgetUrl(photo.url);
}

function drawFrameGallery() {
  ui.categoryTabs.innerHTML = "";
  for (const category of CATEGORIES) {
    const button = document.createElement("button");
    button.className = `category-tab${state.category === category ? " selected" : ""}`;
    button.type = "button";
    button.textContent = category;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(state.category === category));
    button.addEventListener("click", () => { state.category = category; drawFrameGallery(); });
    ui.categoryTabs.append(button);
  }
  const frames = state.category === "All looks" ? FRAME_CATALOG : FRAME_CATALOG.filter((frame) => frame.category === state.category);
  ui.frameGallery.innerHTML = "";
  for (const frame of frames) {
    const card = document.createElement("div");
    card.className = `frame-card${frame.id === state.frameId ? " selected" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", String(frame.id === state.frameId));
    const mini = document.createElement("span");
    mini.className = `mini-frame layout-${frame.layout}`;
    mini.style.setProperty("--frame-color", frame.background);
    mini.style.setProperty("--frame-accent", frame.accent);
    mini.dataset.design = frame.design || frame.id;
    const slotCount = frame.layout === "grid" ? 4 : 3;
    for (let i = 0; i < slotCount; i++) {
      const slot = document.createElement("i");
      slot.className = "mini-slot";
      mini.append(slot);
    }
    if (frame.layout !== "grid") {
      const caption = document.createElement("i");
      caption.className = "mini-caption";
      mini.append(caption);
    }
    const title = document.createElement("span");
    title.className = "frame-title";
    title.textContent = frame.name;
    const subtitle = document.createElement("span");
    subtitle.className = "frame-subtitle";
    subtitle.textContent = frame.category;
    const favorite = document.createElement("button");
    favorite.className = `favorite-frame${state.favorites.includes(frame.id) ? " is-favorite" : ""}`;
    favorite.type = "button";
    favorite.textContent = state.favorites.includes(frame.id) ? "♥" : "♡";
    favorite.title = state.favorites.includes(frame.id) ? "Remove favorite" : "Favorite frame";
    favorite.setAttribute("aria-label", favorite.title);
    favorite.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!state.settings.saveFavorites) {
        showToast("Turn on favorite frames in Studio settings to save favorites.");
        return;
      }
      state.favorites = state.favorites.includes(frame.id)
        ? state.favorites.filter((id) => id !== frame.id)
        : [...state.favorites, frame.id];
      persistJSON("lm-favorites", state.favorites);
      drawFrameGallery();
    });
    const choose = () => {
      state.frameId = frame.id;
      state.frameColor = null;
      ui.frameColor.value = frame.background;
      drawFrameGallery();
      renderCanvas();
      saveLastUsed();
    };
    card.addEventListener("click", choose);
    card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); choose(); } });
    card.append(mini, favorite, title, subtitle);
    ui.frameGallery.append(card);
  }
}

function selectedLayout(count) {
  const layout = currentFrame().layout;
  if (layout === "classic-white") return "classic-white";
  if (count <= 1 || layout === "single") return "single";
  if (layout === "grid" && count === 4) return "grid";
  if (layout === "polaroid") return "polaroid";
  return "strip";
}
function canvasSize(count, layout) {
  if (layout === "classic-white") return [900, 450 + count * 450];
  if (layout === "single") return [900, 1180];
  if (layout === "grid") return [1060, 1080];
  if (layout === "polaroid") return [900, 300 + count * 405];
  return [900, 290 + count * 402];
}
function photoSlots(count, layout, width, height) {
  if (layout === "classic-white") {
    const left = width * .18;
    const slotWidth = width * .64;
    const top = height * .17;
    const footer = height * .13;
    const gap = Math.max(22, height * .022);
    const slotHeight = (height - top - footer - gap * (count - 1)) / count;
    return Array.from({ length: count }, (_, index) => ({
      x: left,
      y: top + index * (slotHeight + gap),
      w: slotWidth,
      h: slotHeight,
    }));
  }
  if (layout === "single") return [{ x: .085 * width, y: .07 * height, w: .83 * width, h: .78 * height }];
  if (layout === "grid") {
    const marginX = .075, marginY = .075, gapX = .035, gapY = .028;
    const w = (1 - marginX * 2 - gapX) / 2;
    const h = (1 - marginY * 2 - gapY) / 2;
    return Array.from({ length: count }, (_, i) => ({
      x: (marginX + i % 2 * (w + gapX)) * width,
      y: (marginY + Math.floor(i / 2) * (h + gapY)) * height,
      w: w * width,
      h: h * height,
    }));
  }
  const marginX = layout === "polaroid" ? .12 : .1;
  const top = layout === "polaroid" ? .04 : .045;
  const bottom = layout === "polaroid" ? .105 : .12;
  const gap = layout === "polaroid" ? 17 : .016 * height;
  const usableHeight = height * (1 - top - bottom) - gap * (count - 1);
  const slotHeight = usableHeight / count;
  return Array.from({ length: count }, (_, i) => ({
    x: marginX, y: top * height + i * (slotHeight + gap), w: 1 - marginX * 2, h: slotHeight,
  })).map((slot) => ({ ...slot, x: slot.x * width, w: slot.w * width }));
}
function coverImage(image, x, y, width, height, zoom = 1) {
  const scale = Math.max(width / image.width, height / image.height) * zoom;
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  context.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
}
function drawBackground(frame, width, height, layout) {
  context.fillStyle = state.frameColor || frame.background;
  context.fillRect(0, 0, width, height);
  if (layout === "classic-white") {
    context.save();
    context.strokeStyle = "#cdbda9";
    context.globalAlpha = .42;
    context.lineWidth = 2;
    context.strokeRect(24, 24, width - 48, height - 48);
    context.restore();
  }
  context.save();
  context.globalAlpha = .16;
  if (frame.id === "film-roll") {
    context.fillStyle = frame.accent;
    for (let y = 15; y < height; y += 41) {
      context.beginPath(); context.arc(22, y, 5, 0, Math.PI * 2); context.arc(width - 22, y, 5, 0, Math.PI * 2); context.fill();
    }
  } else if (["cherry-pop", "sweethearts", "love-notes"].includes(frame.id)) {
    context.fillStyle = frame.accent;
    context.font = "25px serif";
    for (let y = 40; y < height; y += 180) {
      context.fillText("♡", 24, y); context.fillText("♡", width - 49, y + 60);
    }
  } else if (["lavender-sky", "little-party", "comic-club"].includes(frame.id)) {
    context.fillStyle = frame.accent;
    for (let y = 25; y < height; y += 68) for (let x = 25; x < width; x += 68) {
      context.beginPath(); context.arc(x, y, 1.6, 0, Math.PI * 2); context.fill();
    }
  }
  context.restore();
  if (frame.id === "checker-day") {
    context.save();
    context.globalAlpha = .16;
    const tile = 22;
    for (let y = 0; y < height; y += tile) for (let x = 0; x < width; x += tile) {
      if ((Math.floor(x / tile) + Math.floor(y / tile)) % 2 === 0) {
        context.fillStyle = frame.detail;
        context.fillRect(x, y, tile, tile);
      }
    }
    context.restore();
  }
  if (frame.id === "disco-dream") {
    context.save();
    context.globalAlpha = .23;
    for (let y = 45, row = 0; y < height; y += 145, row++) {
      for (let x = 40 + (row % 2) * 48; x < width; x += 96) {
        context.fillStyle = (row + Math.floor(x / 96)) % 2 ? frame.detail : frame.accent;
        context.beginPath();
        context.moveTo(x, y - 16); context.lineTo(x + 16, y);
        context.lineTo(x, y + 16); context.lineTo(x - 16, y);
        context.closePath(); context.fill();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
        context.stroke();
      }
    }
    context.restore();
  }
  if (layout === "polaroid") {
    context.fillStyle = frame.accent;
    context.globalAlpha = .12;
    context.fillRect(0, 0, 12, height); context.fillRect(width - 12, 0, 12, height);
    context.globalAlpha = 1;
  }
}
function drawFrameOrnaments(frame, width, height, layout) {
  if (!frame.motif && !frame.design) return;
  const motifSize = layout === "grid" ? 27 : 33;
  const slotCenters = photoSlots(state.photoCount, layout, width, height).map((slot) => slot.y + slot.h / 2);
  context.save();
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.globalAlpha = .9;
  context.font = `${motifSize}px 'DM Sans', 'Segoe UI Symbol', sans-serif`;
  slotCenters.forEach((y, index) => {
    context.fillStyle = index % 2 ? frame.detail || frame.accent : frame.accent;
    context.fillText(frame.motif, width * .045, y, width * .09);
    context.fillStyle = index % 2 ? frame.accent : frame.detail || frame.accent;
    context.fillText(frame.motif, width * .955, y, width * .09);
  });
  context.globalAlpha = .55;
  const top = layout === "polaroid" ? 26 : 27;
  const bottom = height - (layout === "polaroid" ? 43 : 37);
  const columns = Math.max(3, Math.floor(width / 160));
  for (let i = 0; i < columns; i++) {
    const x = width * (i + 1) / (columns + 1);
    if (layout === "grid" && i !== Math.floor(columns / 2)) continue;
    context.fillStyle = frame.detail || frame.accent;
    context.fillText(frame.motif, x, top, 42);
    context.fillStyle = frame.accent;
    context.fillText(frame.motif, x, bottom, 42);
  }
  if (frame.id === "passport-stamp" || frame.id === "postcard-days") {
    context.globalAlpha = .62;
    context.strokeStyle = frame.accent;
    context.lineWidth = 3;
    context.setLineDash([7, 5]);
    context.strokeRect(23, 22, width - 46, height - 44);
    context.setLineDash([]);
  }
  if (frame.id === "spooky-sweet") {
    context.globalAlpha = .72;
    context.fillStyle = frame.accent;
    for (let x = 26; x < width; x += 58) {
      context.beginPath();
      context.arc(x, 12, 3, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.moveTo(x - 3, 14); context.lineTo(x, 19); context.lineTo(x + 3, 14);
      context.strokeStyle = frame.accent; context.lineWidth = 1.5; context.stroke();
    }
  }
  const detail = frame.detail || frame.accent;
  const drawLeaf = (x, y, angle, size) => {
    context.save();
    context.translate(x, y);
    context.rotate(angle);
    context.beginPath();
    context.moveTo(0, 0);
    context.quadraticCurveTo(size * .8, -size * .75, size, 0);
    context.quadraticCurveTo(size * .5, size * .6, 0, 0);
    context.fill();
    context.globalAlpha *= .6;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(size * .8, 0);
    context.stroke();
    context.restore();
  };
  if (frame.design === "botanical") {
    context.globalAlpha = .76;
    for (const corner of [
      { x: 15, y: 18, angle: .18 }, { x: width - 15, y: 18, angle: 2.95 },
      { x: 15, y: height - 17, angle: -.32 }, { x: width - 15, y: height - 17, angle: 3.4 },
    ]) {
      context.save();
      context.translate(corner.x, corner.y);
      context.rotate(corner.angle);
      context.strokeStyle = detail;
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(0, 0); context.quadraticCurveTo(28, 26, 64, 38); context.stroke();
      context.fillStyle = frame.accent;
      drawLeaf(17, 13, -.55, 17);
      drawLeaf(34, 25, .48, 15);
      context.fillStyle = detail;
      drawLeaf(45, 28, -.65, 16);
      context.restore();
    }
  } else if (frame.design === "citrus") {
    context.globalAlpha = .7;
    for (const { x, y } of [{ x: 34, y: 28 }, { x: width - 34, y: height - 30 }]) {
      context.fillStyle = detail;
      context.beginPath(); context.ellipse(x + 13, y - 12, 11, 5, -.55, 0, Math.PI * 2); context.fill();
      context.fillStyle = frame.accent;
      context.beginPath(); context.arc(x, y, 17, 0, Math.PI * 2); context.fill();
      context.strokeStyle = "#fff8e8"; context.lineWidth = 2;
      context.beginPath(); context.arc(x, y, 11, 0, Math.PI * 2); context.stroke();
      for (let ray = 0; ray < 8; ray++) {
        const angle = ray * Math.PI / 4;
        context.beginPath();
        context.moveTo(x + Math.cos(angle) * 2, y + Math.sin(angle) * 2);
        context.lineTo(x + Math.cos(angle) * 10, y + Math.sin(angle) * 10);
        context.stroke();
      }
    }
  } else if (frame.design === "rainbow") {
    context.globalAlpha = .52;
    for (const x of [width * .16, width * .84]) {
      const y = height * .15;
      [frame.accent, detail, "#e8bc72", "#fff9ed"].forEach((color, index) => {
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = 7;
        context.arc(x, y, 25 + index * 8, Math.PI, Math.PI * 2);
        context.stroke();
      });
      context.fillStyle = "#fff9ed";
      context.beginPath(); context.arc(x, y, 23, Math.PI, Math.PI * 2); context.fill();
    }
  } else if (frame.design === "tape") {
    for (const tape of [
      { x: width * .14, y: 12, angle: -.28 },
      { x: width * .86, y: height - 12, angle: -.28 },
    ]) {
      context.save();
      context.translate(tape.x, tape.y);
      context.rotate(tape.angle);
      context.globalAlpha = .48;
      context.fillStyle = detail;
      context.fillRect(-48, -10, 96, 21);
      context.globalAlpha = .3;
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
      for (let stitch = -38; stitch < 48; stitch += 12) {
        context.beginPath(); context.moveTo(stitch, -8); context.lineTo(stitch + 5, 8); context.stroke();
      }
      context.restore();
    }
  } else if (frame.design === "neon") {
    context.save();
    context.globalAlpha = .76;
    context.shadowColor = frame.accent;
    context.shadowBlur = 16;
    context.strokeStyle = frame.accent;
    context.lineWidth = 3;
    context.strokeRect(19, 18, width - 38, height - 36);
    context.shadowColor = detail;
    context.strokeStyle = detail;
    context.lineWidth = 1.5;
    context.strokeRect(26, 25, width - 52, height - 50);
    context.restore();
  } else if (frame.design === "waves") {
    context.globalAlpha = .4;
    [height - 38, height - 27, height - 16].forEach((y, index) => {
      context.beginPath();
      context.strokeStyle = index % 2 ? detail : frame.accent;
      context.lineWidth = 3;
      context.moveTo(0, y);
      for (let x = 0; x <= width; x += 36) {
        context.quadraticCurveTo(x + 9, y + (x / 36 % 2 ? 9 : -9), x + 18, y);
      }
      context.stroke();
    });
  } else if (frame.design === "sunburst") {
    context.globalAlpha = .45;
    const cx = width / 2, cy = layout === "grid" ? 33 : 18;
    for (let ray = 0; ray < 19; ray++) {
      const angle = Math.PI * (1.05 + ray / 18 * .9);
      context.beginPath();
      context.strokeStyle = ray % 2 ? detail : frame.accent;
      context.lineWidth = ray % 3 === 0 ? 3 : 1.5;
      context.moveTo(cx + Math.cos(angle) * 22, cy + Math.sin(angle) * 22);
      context.lineTo(cx + Math.cos(angle) * (54 + ray % 3 * 8), cy + Math.sin(angle) * (54 + ray % 3 * 8));
      context.stroke();
    }
    context.fillStyle = detail;
    context.beginPath(); context.arc(cx, cy, 7, 0, Math.PI * 2); context.fill();
  } else if (frame.design === "stars") {
    context.globalAlpha = .52;
    for (let i = 0; i < 36; i++) {
      const x = (i * 97 + 31) % width;
      const y = (i * 137 + 23) % height;
      if (slotCenters.some((center) => Math.abs(center - y) < height / state.photoCount * .34 && x > width * .12 && x < width * .88)) continue;
      context.fillStyle = i % 2 ? detail : frame.accent;
      context.font = `${8 + i % 4 * 3}px serif`;
      context.fillText(i % 3 ? "✦" : "·", x, y);
    }
  } else if (frame.design === "geometry") {
    context.globalAlpha = .58;
    for (let i = 0; i < 8; i++) {
      const x = 32 + i * (width - 64) / 7;
      const y = i % 2 ? height - 20 : 22;
      const radius = i % 3 === 0 ? 10 : 6;
      context.beginPath();
      context.strokeStyle = i % 2 ? detail : frame.accent;
      context.lineWidth = 2;
      context.moveTo(x, y - radius); context.lineTo(x + radius, y);
      context.lineTo(x, y + radius); context.lineTo(x - radius, y);
      context.closePath(); context.stroke();
    }
  } else if (frame.design === "postage") {
    context.globalAlpha = .5;
    context.strokeStyle = frame.accent;
    context.lineWidth = 2;
    context.setLineDash([2, 5]);
    context.strokeRect(17, 17, width - 34, height - 34);
    context.setLineDash([]);
    context.globalAlpha = .7;
    context.strokeStyle = detail;
    context.lineWidth = 3;
    context.beginPath(); context.arc(width - 48, 51, 23, 0, Math.PI * 2); context.stroke();
    context.font = "600 10px 'DM Sans', sans-serif";
    context.textAlign = "center";
    context.fillStyle = frame.accent;
    context.fillText("LOVE", width - 48, 54);
  }
  context.restore();
}
function drawFilmEffects(effect, photoIndex, x, y, width, height, targetContext = context) {
  if (!effect) return;
  if (effect.leak) {
    const glow = targetContext.createRadialGradient(x + width * .08, y + height * .03, 0, x + width * .08, y + height * .03, Math.max(width, height) * .88);
    glow.addColorStop(0, `rgba(255, 158, 72, ${effect.leak})`);
    glow.addColorStop(.35, `rgba(238, 88, 67, ${effect.leak * .42})`);
    glow.addColorStop(1, "rgba(238, 88, 67, 0)");
    targetContext.fillStyle = glow;
    targetContext.fillRect(x, y, width, height);
  }
  if (effect.vignette) {
    const vignette = targetContext.createRadialGradient(
      x + width / 2, y + height / 2, Math.min(width, height) * .22,
      x + width / 2, y + height / 2, Math.max(width, height) * .72,
    );
    vignette.addColorStop(0, "rgba(20, 16, 12, 0)");
    vignette.addColorStop(1, `rgba(27, 20, 14, ${effect.vignette})`);
    targetContext.fillStyle = vignette;
    targetContext.fillRect(x, y, width, height);
  }
  if (effect.grain) {
    const count = Math.min(2400, Math.max(220, Math.floor(width * height / 520)));
    let seed = (photoIndex + 1) * 92821 + width * 17 + height * 31;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    targetContext.save();
    targetContext.globalAlpha = effect.grain;
    for (let i = 0; i < count; i++) {
      const shade = random() > .5 ? 255 : 20;
      const size = random() > .94 ? 2 : 1;
      targetContext.fillStyle = `rgb(${shade} ${shade} ${shade})`;
      targetContext.fillRect(x + random() * width, y + random() * height, size, size);
    }
    targetContext.restore();
  }
}
function selectedCssFilter() {
  return `${FILTERS[state.filter] || ""} brightness(${state.brightness}%) contrast(${state.contrast}%) saturate(${state.saturation}%)`.trim();
}
function updateCameraFilter() {
  ui.cameraVideo.style.filter = FILTERS[state.cameraFilter] || "";
}
function filterForPhoto(photo) {
  return photo?.filter || state.filter;
}
function syncFilterTargetOptions() {
  if (!state.photos.length) state.filterTarget = "all";
  else if (state.filterTarget !== "all" && Number(state.filterTarget) >= state.photos.length) state.filterTarget = "all";
  ui.filterTarget.replaceChildren();
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All photos";
  ui.filterTarget.append(allOption);
  state.photos.forEach((_, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `Photo ${index + 1}`;
    ui.filterTarget.append(option);
  });
  ui.filterTarget.value = state.filterTarget;
  const targetIndex = state.filterTarget === "all" ? -1 : Number(state.filterTarget);
  const targetPhoto = targetIndex >= 0 ? state.photos[targetIndex] : null;
  const targetFilter = targetPhoto ? filterForPhoto(targetPhoto) : state.filter;
  ui.filterSelect.value = FILTERS[targetFilter] !== undefined ? targetFilter : "original";
}
function setFilterForTarget(filter) {
  if (state.filterTarget === "all") {
    state.filter = filter;
    state.photos.forEach((photo) => { photo.filter = null; });
    updateCameraFilter();
  } else {
    const photo = state.photos[Number(state.filterTarget)];
    if (photo) photo.filter = filter;
  }
}
function drawCaption(frame, width, height, layout) {
  const color = frame.ink;
  context.textAlign = "center";
  if (layout === "classic-white") {
    context.fillStyle = color;
    context.font = "600 31px 'Playfair Display', Georgia, serif";
    context.fillText(frame.title || "CLASSIC WHITE", width / 2, height * .075, width - 100);
    context.fillStyle = frame.accent;
    context.font = "italic 22px 'Playfair Display', Georgia, serif";
    context.fillText(state.footer || frame.label, width / 2, height * .105, width - 120);
    context.fillStyle = color;
    context.font = "600 15px 'DM Sans', sans-serif";
    context.fillText(new Date().toLocaleDateString(undefined, { month: "short", day: "2-digit", year: "numeric" }).toUpperCase(), width / 2, height * .925);
    context.fillStyle = frame.accent;
    context.font = "500 10px 'DM Sans', sans-serif";
    context.fillText("PHOTOGRAPHY STUDIO     ·     01", width / 2, height * .95);
    return;
  }
  if (layout === "grid") {
    context.fillStyle = color;
    context.font = "600 26px 'DM Sans', sans-serif";
    context.fillText(state.footer || frame.label, width / 2, height - 25, width - 45);
    return;
  }
  const captionY = height - (layout === "single" ? 100 : 61);
  context.fillStyle = frame.accent;
  context.font = "600 19px 'DM Sans', sans-serif";
  context.fillText(frame.label.toUpperCase(), width / 2, captionY - 24, width - 90);
  context.fillStyle = color;
  context.font = "500 25px 'Playfair Display', Georgia, serif";
  context.fillText(state.footer || "little moments", width / 2, captionY + 8, width - 70);
  context.fillStyle = frame.accent;
  context.font = "500 14px 'DM Sans', sans-serif";
  context.fillText(new Date().getFullYear().toString(), width / 2, captionY + 34);
}
function drawDecorations(width, height) {
  for (const item of state.decorations) {
    const x = item.x * width, y = item.y * height;
    context.save();
    context.translate(x, y);
    context.rotate((item.rotation || 0) * Math.PI / 180);
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = `${item.size || 42}px ${item.kind === "text" ? "'DM Sans', sans-serif" : "serif"}`;
    context.fillStyle = item.color || currentFrame().accent;
    if (item.kind === "text") {
      context.font = `600 ${item.size || 30}px 'DM Sans', sans-serif`;
      context.shadowColor = "#ffffffbd";
      context.shadowBlur = 2;
    }
    context.fillText(item.value, 0, 0, width * .72);
    context.restore();
  }
}
function renderCanvas() {
  const frame = currentFrame();
  const count = state.photoCount;
  const layout = selectedLayout(count);
  const [width, height] = canvasSize(count, layout);
  ui.canvas.width = width;
  ui.canvas.height = height;
  drawBackground(frame, width, height, layout);
  const slots = photoSlots(count, layout, width, height);
  updateCameraFilter();
  slots.forEach((slot, index) => {
    const classic = layout === "classic-white";
    const inset = classic ? 11 : 0;
    const x = slot.x + inset, y = slot.y + inset, w = slot.w - inset * 2, h = slot.h - inset * 2;
    context.save();
    if (classic) {
      context.fillStyle = "#d1c4b7";
      context.fillRect(slot.x, slot.y, slot.w, slot.h);
      context.strokeStyle = "#776d63";
      context.lineWidth = 3;
      context.strokeRect(slot.x, slot.y, slot.w, slot.h);
    } else {
      context.shadowColor = "#30261e23";
      context.shadowBlur = 9;
      context.shadowOffsetY = 3;
      context.fillStyle = "#ffffff";
      context.fillRect(x - 3, y - 3, w + 6, h + 6);
    }
    context.restore();
    context.save();
    context.beginPath();
    context.rect(x, y, w, h);
    context.clip();
    const photo = state.photos[index];
    if (photo?.image?.complete && photo.image.naturalWidth) {
      const photoFilter = filterForPhoto(photo);
      context.filter = `${FILTERS[photoFilter] || ""} brightness(${state.brightness}%) contrast(${state.contrast}%) saturate(${state.saturation}%)`.trim();
      coverImage(photo.image, x, y, w, h, photo.zoom || 1);
      context.filter = "none";
      drawFilmEffects(FILM_EFFECTS[photoFilter], index, x, y, w, h);
    } else {
      context.fillStyle = "#e7ded5";
      context.fillRect(x, y, w, h);
      context.fillStyle = "#b2a69a";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "500 17px 'DM Sans', sans-serif";
      context.fillText(`PHOTO ${index + 1}`, x + w / 2, y + h / 2 - 7);
      context.font = "13px 'DM Sans', sans-serif";
      context.fillText("waiting for your moment", x + w / 2, y + h / 2 + 17);
    }
    context.restore();
    if (classic) {
      context.save();
      context.strokeStyle = "#a99b8d";
      context.lineWidth = 1;
      context.setLineDash([8, 8]);
      context.strokeRect(slot.x + 14, slot.y + 14, slot.w - 28, slot.h - 28);
      context.restore();
    }
  });
  drawFrameOrnaments(frame, width, height, layout);
  drawCaption(frame, width, height, layout);
  drawDecorations(width, height);
  ui.emptyCanvas.hidden = state.photos.length > 0 || state.workflowStep === 1;
  ui.previewResolution.textContent = `${count} CUT · ${layout === "grid" ? "COLLAGE" : layout === "single" ? "PORTRAIT" : "PORTRAIT"}`;
  ui.canvas.style.aspectRatio = `${width} / ${height}`;
  $("#undoButton").disabled = state.undoStack.length === 0;
  $("#redoButton").disabled = state.redoStack.length === 0;
}

function updateReview() {
  syncFilterTargetOptions();
  ui.photoReview.hidden = state.photos.length === 0;
  ui.photoThumbnails.innerHTML = "";
  state.photos.forEach((photo, index) => {
    const thumb = document.createElement("div");
    thumb.className = "photo-thumb";
    const image = document.createElement("img");
    image.src = photo.url;
    image.alt = `Captured photo ${index + 1}`;
    const number = document.createElement("span");
    number.textContent = `${index + 1}`;
    thumb.append(image, number);
    const zoomIn = document.createElement("button");
    zoomIn.type = "button";
    zoomIn.textContent = "＋";
    zoomIn.title = "Zoom photo in";
    zoomIn.className = "thumb-action zoom-in";
    zoomIn.addEventListener("click", () => { photo.zoom = Math.min(2.5, (photo.zoom || 1) + .15); renderCanvas(); });
    const replace = document.createElement("button");
    replace.type = "button";
    replace.textContent = "↺";
    replace.title = `Retake photo ${index + 1}`;
    replace.className = "thumb-action replace-shot";
    replace.addEventListener("click", () => retakeOne(index));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.title = `Remove photo ${index + 1}`;
    remove.className = "thumb-action remove-shot";
    remove.addEventListener("click", () => {
      forgetPhoto(state.photos[index]);
      state.photos.splice(index, 1);
      ui.photoCount.value = String(Math.max(2, Math.min(6, state.photos.length || 2)));
      state.photoCount = Number(ui.photoCount.value);
      renderEverything();
    });
    thumb.append(zoomIn, replace, remove);
    ui.photoThumbnails.append(thumb);
  });
  ui.captureButtonText.textContent = state.photos.length >= state.photoCount
    ? "Start a new set"
    : state.photos.length ? "Continue capturing" : "Start capturing";
  setCaptureProgress(state.photos.length, state.photoCount, state.photos.length === state.photoCount ? "All your shots are ready" : `${state.photos.length} of ${state.photoCount} photos ready`);
}
function renderEverything() { renderCanvas(); updateReview(); }

function db() {
  if (!("indexedDB" in window)) return Promise.reject(new Error("This browser does not support local photo storage."));
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains("sessions")) database.createObjectStore("sessions", { keyPath: "id" });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Could not open local photo storage."));
      request.onblocked = () => reject(new Error("Photo storage is busy in another tab. Close it and try again."));
    });
  }
  return dbPromise;
}
async function withStore(mode, action) {
  const database = await db();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction("sessions", mode);
    const request = action(transaction.objectStore("sessions"));
    let result;
    request.onsuccess = () => { result = request.result; };
    request.onerror = () => reject(request.error || new Error("Local photo storage request failed."));
    transaction.oncomplete = () => resolve(result);
    transaction.onerror = () => reject(transaction.error || new Error("Local photo storage transaction failed."));
    transaction.onabort = () => reject(transaction.error || new Error("Local photo storage was interrupted."));
  });
}
async function loadSessions() {
  try {
    state.sessions = (await withStore("readonly", (store) => store.getAll())).sort((a, b) => b.createdAt - a.createdAt);
    ui.galleryCount.textContent = String(state.sessions.length);
    drawSavedGallery();
  } catch (error) {
    showToast(error.message || "Could not read your saved sessions.");
  }
}
function saveLastUsed() {
  persistJSON("lm-last-used", { frameId: state.frameId, photoCount: state.photoCount, filter: state.filter });
}
async function saveSession() {
  if (!state.photos.length) { showToast("Take or upload a photo before saving a session."); return; }
  const button = $("#saveSessionButton");
  button.disabled = true;
  try {
    const thumbnail = await canvasBlob("image/jpeg", .86);
    const session = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      frameId: state.frameId,
      frameColor: state.frameColor,
      footer: state.footer,
      filter: state.filter,
      brightness: state.brightness,
      contrast: state.contrast,
      saturation: state.saturation,
      photoCount: state.photoCount,
      photoBlobs: state.photos.map((photo) => photo.blob),
      photoZooms: state.photos.map((photo) => photo.zoom || 1),
      photoFilters: state.photos.map((photo) => photo.filter || null),
      cameraFilter: state.cameraFilter,
      decorations: structuredClone(state.decorations),
      thumbnail,
    };
    await withStore("readwrite", (store) => store.put(session));
    showToast("Your moment is tucked away in My gallery.");
    await loadSessions();
  } catch (error) {
    showToast(error.message || "Could not save this session. Check available browser storage.");
  } finally { button.disabled = false; }
}
async function deleteSession(id) {
  if (!window.confirm("Delete this saved moment from this device?")) return;
  try {
    await withStore("readwrite", (store) => store.delete(id));
    await loadSessions();
    showToast("Saved moment deleted.");
  } catch (error) { showToast(error.message || "Could not delete this session."); }
}
async function reopenSession(id) {
  const session = state.sessions.find((entry) => entry.id === id);
  if (!session) return;
  try {
    state.photos.forEach(forgetPhoto);
    state.photos = await Promise.all(session.photoBlobs.map(async (blob, index) => {
      const image = await imageFromBlob(blob);
      return {
        blob, url: image._studioUrl, image, zoom: session.photoZooms?.[index] || 1,
        filter: session.photoFilters?.[index] || null,
      };
    }));
    state.frameId = session.frameId;
    state.frameColor = session.frameColor || null;
    state.footer = session.footer || "";
    state.filter = session.filter || "original";
    state.brightness = session.brightness || 100;
    state.contrast = session.contrast || 100;
    state.saturation = session.saturation || 100;
    state.photoCount = session.photoCount || Math.max(2, session.photoBlobs.length);
    state.cameraFilter = FILTERS[session.cameraFilter] !== undefined ? session.cameraFilter : "original";
    state.decorations = structuredClone(session.decorations || []);
    state.filterTarget = "all";
    ui.photoCount.value = String(state.photoCount);
    ui.footerInput.value = state.footer;
    ui.filterSelect.value = state.filter;
    ui.cameraFilter.value = state.cameraFilter;
    ui.brightness.value = state.brightness; ui.contrast.value = state.contrast; ui.saturation.value = state.saturation;
    ui.brightnessValue.value = `${state.brightness}%`; ui.contrastValue.value = `${state.contrast}%`; ui.saturationValue.value = `${state.saturation}%`;
    ui.frameColor.value = state.frameColor || currentFrame().background;
    showView("studio");
    setWorkflowStep(3, { scroll: false });
    drawFrameGallery();
    renderEverything();
    showToast("Your saved moment is ready to edit.");
  } catch (error) { showToast(error.message || "Could not reopen this saved session."); }
}
function drawSavedGallery() {
  state.galleryUrls?.forEach(forgetUrl);
  state.galleryUrls = new Set();
  const favoritesOnly = state.galleryFilter === "favorites";
  const query = state.galleryQuery.trim().toLowerCase();
  const sessions = state.sessions.filter((session) => {
    const frame = FRAME_CATALOG.find((item) => item.id === session.frameId);
    return (!favoritesOnly || state.favorites.includes(session.frameId))
      && (!query || `${frame?.name || ""} ${frame?.category || ""} ${session.footer || ""}`.toLowerCase().includes(query));
  });
  ui.savedGrid.innerHTML = "";
  for (const session of sessions) {
    const frame = FRAME_CATALOG.find((item) => item.id === session.frameId) || FRAME_CATALOG[0];
    const card = document.createElement("article");
    card.className = "saved-card";
    const image = document.createElement("img");
    image.src = ownedUrl(session.thumbnail);
    state.galleryUrls.add(image.src);
    image.alt = `Saved ${frame.name} photobooth session`;
    const body = document.createElement("div");
    body.className = "saved-card-body";
    const title = document.createElement("strong");
    title.textContent = session.footer || frame.name;
    const date = document.createElement("small");
    date.textContent = `${frame.name} · ${new Date(session.createdAt).toLocaleDateString(undefined, { dateStyle: "medium" })}`;
    const actions = document.createElement("div");
    actions.className = "saved-card-actions";
    const edit = document.createElement("button");
    edit.type = "button"; edit.textContent = "Open & edit"; edit.addEventListener("click", () => reopenSession(session.id));
    const download = document.createElement("button");
    download.type = "button"; download.textContent = "Download"; download.addEventListener("click", () => downloadBlob(session.thumbnail, `little-moments-${session.id}.jpg`));
    const remove = document.createElement("button");
    remove.type = "button"; remove.textContent = "Delete"; remove.className = "delete-session"; remove.addEventListener("click", () => deleteSession(session.id));
    actions.append(edit, download, remove);
    body.append(title, date, actions);
    card.append(image, body);
    ui.savedGrid.append(card);
  }
  ui.galleryEmpty.hidden = sessions.length > 0;
  ui.savedGrid.hidden = sessions.length === 0;
}
function showView(view) {
  const studio = view === "studio";
  $("#studioView").hidden = !studio;
  $("#galleryView").hidden = studio;
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  if (!studio) loadSessions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function canvasBlob(type, quality) {
  return new Promise((resolve, reject) => {
    ui.canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Could not create the photo export.")), type, quality);
  });
}
function downloadBlob(blob, filename) {
  const url = ownedUrl(blob);
  const link = document.createElement("a");
  link.href = url; link.download = filename;
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => forgetUrl(url), 1000);
}
async function exportPhoto(type) {
  if (!state.photos.length) { showToast("Take or upload photos before downloading."); return; }
  try {
    const blob = await canvasBlob(type, type === "image/jpeg" ? .94 : undefined);
    const extension = type === "image/jpeg" ? "jpg" : "png";
    downloadBlob(blob, `little-moments-${new Date().toISOString().slice(0, 10)}.${extension}`);
    showToast(`${extension.toUpperCase()} keepsake downloaded.`);
  } catch (error) { showToast(error.message || "Could not export your photo."); }
}
function printPhoto() {
  if (!state.photos.length) { showToast("Take or upload photos before printing."); return; }
  const printWindow = window.open("", "_blank");
  if (!printWindow) { showToast("Allow pop-ups to open the print preview."); return; }
  ui.canvas.toBlob((blob) => {
    if (!blob) { printWindow.close(); showToast("Could not prepare the print image."); return; }
    const url = ownedUrl(blob);
    printWindow.document.write(`<!doctype html><html><head><title>Little moments</title><style>@page{margin:0}*{box-sizing:border-box}body{margin:0;display:grid;place-items:center;min-height:100vh}img{max-height:100vh;max-width:100%;object-fit:contain}</style></head><body><img src="${url}" alt="Photobooth strip" onload="setTimeout(()=>window.print(),250)"></body></html>`);
    printWindow.document.close();
  }, "image/png");
}

async function startCamera() {
  ui.cameraError.hidden = true;
  if (!navigator.mediaDevices?.getUserMedia) {
    showCameraError("Camera access is unavailable here. Open the app at http://localhost or HTTPS, or upload photos instead.");
    return;
  }
  stopCamera();
  try {
    const video = state.cameraId ? { deviceId: { exact: state.cameraId } } : { facingMode: "user" };
    state.cameraStream = await navigator.mediaDevices.getUserMedia({ video: { ...video, width: { ideal: 1280 }, height: { ideal: 960 } }, audio: false });
    ui.cameraVideo.srcObject = state.cameraStream;
    await ui.cameraVideo.play();
    ui.cameraStage.classList.add("camera-on");
    ui.livePill.classList.add("is-live");
    ui.cameraToggle.setAttribute("aria-label", "Turn camera off");
    ui.cameraToggle.title = "Turn camera off";
    ui.mirrorButton.hidden = false;
    await refreshCameraList();
  } catch (error) {
    stopCamera();
    const reason = error.name === "NotAllowedError" ? "Camera permission was blocked. Allow camera access in your browser's address-bar or site settings, then try again."
      : error.name === "NotFoundError" ? "No camera was found. Connect a camera or upload photos instead."
        : error.name === "NotReadableError" ? "Your camera is being used by another app. Close it there and try again."
          : "The camera could not be started. Check browser permissions and try again, or upload photos instead.";
    showCameraError(reason);
  }
}
function stopCamera() {
  state.cameraStream?.getTracks().forEach((track) => track.stop());
  state.cameraStream = null;
  ui.cameraVideo.srcObject = null;
  ui.cameraStage.classList.remove("camera-on");
  ui.livePill.classList.remove("is-live");
  ui.cameraToggle.setAttribute("aria-label", "Turn camera on");
  ui.cameraToggle.title = "Turn camera on";
}
function showCameraError(message) {
  ui.cameraError.textContent = message;
  ui.cameraError.hidden = false;
  showToast("Camera unavailable — uploading photos still works.");
}
async function refreshCameraList() {
  if (!navigator.mediaDevices?.enumerateDevices) return;
  try {
    const devices = (await navigator.mediaDevices.enumerateDevices()).filter((device) => device.kind === "videoinput");
    const current = state.cameraId || ui.cameraVideo.srcObject?.getVideoTracks()[0]?.getSettings().deviceId || "";
    ui.cameraSelect.innerHTML = "";
    devices.forEach((device, index) => {
      const option = document.createElement("option");
      option.value = device.deviceId;
      option.textContent = device.label || `Camera ${index + 1}`;
      option.selected = device.deviceId === current;
      ui.cameraSelect.append(option);
    });
    if (!devices.length) {
      const option = document.createElement("option");
      option.value = ""; option.textContent = "Default camera";
      ui.cameraSelect.append(option);
    }
  } catch (error) { console.warn("Could not enumerate cameras.", error); }
}
function snapshotCamera() {
  if (!state.cameraStream || !ui.cameraVideo.videoWidth) throw new Error("Turn on the camera before taking a photo.");
  const shot = document.createElement("canvas");
  shot.width = ui.cameraVideo.videoWidth;
  shot.height = ui.cameraVideo.videoHeight;
  const shotContext = shot.getContext("2d");
  shotContext.filter = FILTERS[state.cameraFilter] || "none";
  shotContext.drawImage(ui.cameraVideo, 0, 0, shot.width, shot.height);
  shotContext.filter = "none";
  drawFilmEffects(FILM_EFFECTS[state.cameraFilter], 17, 0, 0, shot.width, shot.height, shotContext);
  return new Promise((resolve, reject) => shot.toBlob((blob) => {
    if (!blob) reject(new Error("The camera photo could not be captured."));
    else resolve(blob);
  }, "image/jpeg", .94));
}
function playBeep() {
  if (!state.settings.sound) return;
  try {
    const audio = new AudioContext();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.frequency.value = 660; gain.gain.value = .08;
    oscillator.connect(gain); gain.connect(audio.destination);
    oscillator.start(); oscillator.stop(audio.currentTime + .1);
    oscillator.onended = () => audio.close();
  } catch (error) { console.warn("Capture sound is unavailable.", error); }
}
function wait(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
async function countdown() {
  const seconds = state.timer;
  for (let value = seconds; value > 0; value--) {
    ui.countdown.textContent = String(value);
    ui.countdown.hidden = false;
    playBeep();
    await wait(1000);
  }
  ui.countdown.hidden = true;
}
async function captureSet(resetExisting = false) {
  if (state.captureBusy) return;
  if (resetExisting || state.photos.length >= state.photoCount) {
    state.photos.forEach(forgetPhoto);
    state.photos = [];
    renderEverything();
  }
  if (!state.cameraStream) { await startCamera(); if (!state.cameraStream) return; }
  state.captureBusy = true;
  ui.captureButton.disabled = true;
  try {
    for (let index = state.photos.length; index < state.photoCount; index++) {
      setCaptureProgress(index, state.photoCount, `Photo ${index + 1} of ${state.photoCount} · get ready`);
      await countdown();
      const blob = await snapshotCamera();
      const image = await imageFromBlob(blob);
      state.photos.push({ blob, url: image._studioUrl, image, zoom: 1, filter: null });
      ui.flash.classList.remove("flash");
      void ui.flash.offsetWidth;
      ui.flash.classList.add("flash");
      renderEverything();
      if (index < state.photoCount - 1) await wait(450);
    }
    setCaptureProgress(state.photoCount, state.photoCount, "All your shots are ready");
    showToast("All done — your little moments are ready.");
  } catch (error) {
    showCameraError(error.message || "A photo could not be captured.");
  } finally {
    state.captureBusy = false;
    ui.captureButton.disabled = false;
  }
}
async function retakeOne(index) {
  if (!state.cameraStream) {
    state.pendingPhoneReplacement = index;
    showToast("Take a replacement with your phone camera.");
    ui.phoneCameraUpload.click();
    return;
  }
  if (state.captureBusy) return;
  state.captureBusy = true;
  ui.captureButton.disabled = true;
  try {
    setCaptureProgress(index, state.photoCount, `Retaking photo ${index + 1}`);
    await countdown();
    const blob = await snapshotCamera();
    const image = await imageFromBlob(blob);
    forgetPhoto(state.photos[index]);
    state.photos[index] = { blob, url: image._studioUrl, image, zoom: 1, filter: null };
    renderEverything();
    showToast(`Photo ${index + 1} has a fresh take.`);
  } catch (error) { showCameraError(error.message || "Could not retake this photo."); }
  finally { state.captureBusy = false; ui.captureButton.disabled = false; }
}
async function uploadPhotos(files, append = false) {
  const selected = Array.from(files).filter((file) => file.type.startsWith("image/"));
  if (!selected.length) { showToast("Choose one or more image files to add photos."); return; }
  try {
    const next = await Promise.all(selected.map(async (blob) => {
      const image = await imageFromBlob(blob);
      return { blob, url: image._studioUrl, image, zoom: 1, filter: null };
    }));
    if (state.pendingPhoneReplacement !== null) {
      const index = state.pendingPhoneReplacement;
      state.pendingPhoneReplacement = null;
      if (state.photos[index]) forgetPhoto(state.photos[index]);
      state.photos[index] = next[0];
      next.slice(1).forEach(forgetPhoto);
    } else if (append) {
      const remaining = Math.max(0, state.photoCount - state.photos.length);
      if (!remaining) {
        next.forEach(forgetPhoto);
        showToast("This set is full. Start a new session to take another set.");
        return;
      }
      state.photos.push(...next.slice(0, remaining));
      next.slice(remaining).forEach(forgetPhoto);
    } else {
      state.photos.forEach(forgetPhoto);
      state.photos = next.slice(0, 6);
      const countOptions = [2, 3, 4, 5, 6];
      state.photoCount = countOptions.includes(state.photos.length) ? state.photos.length : state.photos.length > 5 ? 6 : 2;
      state.photos = state.photos.slice(0, state.photoCount);
      ui.photoCount.value = String(state.photoCount);
      state.decorations = [];
    }
    renderEverything();
    saveLastUsed();
    showToast(`${state.photos.length} photo${state.photos.length === 1 ? "" : "s"} added to your session.`);
  } catch (error) { showToast(error.message || "One of those images could not be opened."); }
  ui.photoUpload.value = "";
}

function pushUndo() {
  state.undoStack.push(JSON.stringify(state.decorations));
  if (state.undoStack.length > 30) state.undoStack.shift();
  state.redoStack = [];
}
function addDecoration(value, kind = "sticker") {
  pushUndo();
  state.decorations.push({
    id: crypto.randomUUID(), value, kind, x: .5, y: .48,
    size: kind === "text" ? 31 : 45, rotation: (Math.random() - .5) * 14,
    color: kind === "text" ? currentFrame().ink : currentFrame().accent,
  });
  state.selectedDecoration = state.decorations.at(-1).id;
  renderCanvas();
}
function undoRedo(from, to) {
  if (!from.length) return;
  to.push(JSON.stringify(state.decorations));
  state.decorations = JSON.parse(from.pop());
  renderCanvas();
}
function canvasPoint(event) {
  const bounds = ui.canvas.getBoundingClientRect();
  return { x: (event.clientX - bounds.left) / bounds.width, y: (event.clientY - bounds.top) / bounds.height };
}
function pointerDown(event) {
  const point = canvasPoint(event);
  const width = ui.canvas.width, height = ui.canvas.height;
  const found = [...state.decorations].reverse().find((item) => {
    const dx = (item.x - point.x) * width, dy = (item.y - point.y) * height;
    return Math.hypot(dx, dy) < (item.size || 40) * 1.3;
  });
  if (found) {
    pushUndo();
    state.pointerDecoration = found;
    ui.canvas.setPointerCapture(event.pointerId);
  }
}
function pointerMove(event) {
  if (!state.pointerDecoration) return;
  const point = canvasPoint(event);
  state.pointerDecoration.x = Math.max(.03, Math.min(.97, point.x));
  state.pointerDecoration.y = Math.max(.03, Math.min(.97, point.y));
  renderCanvas();
}
function pointerUp() { state.pointerDecoration = null; }

function applySettings() {
  state.mirrored = state.settings.mirror !== false;
  ui.mirrorSetting.checked = state.mirrored;
  ui.soundSetting.checked = Boolean(state.settings.sound);
  ui.favoritesSetting.checked = state.settings.saveFavorites !== false;
  ui.cameraStage.classList.toggle("mirrored", state.mirrored);
}
function bindEvents() {
  document.querySelectorAll(".nav-link").forEach((button) => button.addEventListener("click", () => showView(button.dataset.view)));
  document.querySelectorAll(".workflow-step").forEach((button) => button.addEventListener("click", () => {
    setWorkflowStep(button.dataset.workflowStep);
  }));
  document.querySelectorAll("[data-step-next]").forEach((button) => button.addEventListener("click", () => {
    setWorkflowStep(state.workflowStep + 1);
  }));
  document.querySelectorAll("[data-step-back]").forEach((button) => button.addEventListener("click", () => {
    setWorkflowStep(state.workflowStep - 1);
  }));
  $("#randomFrameButton").addEventListener("click", () => {
    const options = FRAME_CATALOG.filter((frame) => frame.id !== state.frameId);
    const frame = options[Math.floor(Math.random() * options.length)];
    state.frameId = frame.id; state.category = "All looks"; state.frameColor = null;
    ui.frameColor.value = frame.background;
    drawFrameGallery(); renderCanvas(); saveLastUsed();
  });
  ui.photoCount.addEventListener("change", () => {
    state.photoCount = Number(ui.photoCount.value);
    renderEverything(); saveLastUsed();
  });
  ui.timerSelect.addEventListener("change", () => { state.timer = Number(ui.timerSelect.value); });
  ui.cameraFilter.addEventListener("change", () => {
    state.cameraFilter = ui.cameraFilter.value;
    updateCameraFilter();
    persistJSON("lm-camera-filter", state.cameraFilter);
  });
  ui.captureButton.addEventListener("click", captureSet);
  ui.cameraToggle.addEventListener("click", () => state.cameraStream ? stopCamera() : startCamera());
  ui.mirrorButton.addEventListener("click", () => {
    state.mirrored = !state.mirrored;
    ui.cameraStage.classList.toggle("mirrored", state.mirrored);
    state.settings.mirror = state.mirrored; persistJSON("lm-settings", state.settings);
    ui.mirrorSetting.checked = state.mirrored;
  });
  ui.cameraSelect.addEventListener("change", async () => { state.cameraId = ui.cameraSelect.value; if (state.cameraStream) await startCamera(); });
  $("#uploadButton").addEventListener("click", () => ui.photoUpload.click());
  ui.photoUpload.addEventListener("change", () => uploadPhotos(ui.photoUpload.files));
  $("#phoneCameraButton").addEventListener("click", () => ui.phoneCameraUpload.click());
  ui.phoneCameraUpload.addEventListener("change", () => uploadPhotos(ui.phoneCameraUpload.files, true));
  $("#retakeAllButton").addEventListener("click", () => captureSet(true));
  ui.filterTarget.addEventListener("change", () => {
    state.filterTarget = ui.filterTarget.value;
    syncFilterTargetOptions();
  });
  ui.filterSelect.addEventListener("change", () => {
    setFilterForTarget(ui.filterSelect.value);
    syncFilterTargetOptions();
    renderCanvas();
    saveLastUsed();
  });
  for (const [id, key, output] of [["brightness", "brightness", "brightnessValue"], ["contrast", "contrast", "contrastValue"], ["saturation", "saturation", "saturationValue"]]) {
    $(`#${id}`).addEventListener("input", (event) => {
      state[key] = Number(event.target.value);
      $(`#${output}`).value = `${state[key]}%`;
      renderCanvas();
    });
  }
  ui.footerInput.addEventListener("input", () => { state.footer = ui.footerInput.value; renderCanvas(); });
  ui.frameColor.addEventListener("input", () => { state.frameColor = ui.frameColor.value; renderCanvas(); });
  $("#stickerTray").addEventListener("click", (event) => {
    const button = event.target.closest("[data-sticker]");
    if (button) addDecoration(button.dataset.sticker);
  });
  $("#addCaptionButton").addEventListener("click", () => {
    const caption = ui.captionInput.value.trim();
    if (!caption) { ui.captionInput.focus(); return; }
    addDecoration(caption.slice(0, 36), "text");
    ui.captionInput.value = "";
  });
  ui.captionInput.addEventListener("keydown", (event) => { if (event.key === "Enter") $("#addCaptionButton").click(); });
  $("#clearDecorationsButton").addEventListener("click", () => {
    if (!state.decorations.length) return;
    pushUndo(); state.decorations = []; renderCanvas();
  });
  $("#undoButton").addEventListener("click", () => undoRedo(state.undoStack, state.redoStack));
  $("#redoButton").addEventListener("click", () => undoRedo(state.redoStack, state.undoStack));
  ui.canvas.addEventListener("pointerdown", pointerDown);
  ui.canvas.addEventListener("pointermove", pointerMove);
  ui.canvas.addEventListener("pointerup", pointerUp);
  ui.canvas.addEventListener("pointercancel", pointerUp);
  $("#downloadPngButton").addEventListener("click", () => exportPhoto("image/png"));
  $("#downloadJpegButton").addEventListener("click", () => exportPhoto("image/jpeg"));
  $("#printButton").addEventListener("click", printPhoto);
  $("#saveSessionButton").addEventListener("click", saveSession);
  $("#settingsButton").addEventListener("click", () => { ui.settingsModal.hidden = false; });
  $("#closeSettingsButton").addEventListener("click", () => { ui.settingsModal.hidden = true; });
  ui.settingsModal.addEventListener("click", (event) => { if (event.target === ui.settingsModal) ui.settingsModal.hidden = true; });
  ui.mirrorSetting.addEventListener("change", () => {
    state.settings.mirror = ui.mirrorSetting.checked; state.mirrored = state.settings.mirror;
    ui.cameraStage.classList.toggle("mirrored", state.mirrored); persistJSON("lm-settings", state.settings);
  });
  ui.soundSetting.addEventListener("change", () => { state.settings.sound = ui.soundSetting.checked; persistJSON("lm-settings", state.settings); });
  ui.favoritesSetting.addEventListener("change", () => { state.settings.saveFavorites = ui.favoritesSetting.checked; persistJSON("lm-settings", state.settings); drawFrameGallery(); });
  $("#newSessionButton").addEventListener("click", newSession);
  $("#emptyStartButton").addEventListener("click", newSession);
  ui.galleryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.galleryFilter = button.dataset.filter;
    ui.galleryFilters.querySelectorAll("button").forEach((item) => item.classList.toggle("selected", item === button));
    drawSavedGallery();
  });
  ui.gallerySearch.addEventListener("input", () => { state.galleryQuery = ui.gallerySearch.value; drawSavedGallery(); });
  $("#clearDataButton").addEventListener("click", async () => {
    if (!window.confirm("Permanently delete all saved sessions and favorites from this device? This cannot be undone.")) return;
    try {
      const database = await db();
      await new Promise((resolve, reject) => {
        const transaction = database.transaction("sessions", "readwrite");
        transaction.objectStore("sessions").clear();
        transaction.oncomplete = resolve;
        transaction.onerror = () => reject(transaction.error || new Error("Could not clear saved sessions."));
      });
      state.favorites = [];
      persistJSON("lm-favorites", []);
      await loadSessions(); drawFrameGallery();
      showToast("Your local gallery and favorites have been cleared.");
    } catch (error) { showToast(error.message || "Could not clear local data."); }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") ui.settingsModal.hidden = true;
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
      event.preventDefault(); event.shiftKey ? undoRedo(state.redoStack, state.undoStack) : undoRedo(state.undoStack, state.redoStack);
    }
    if (event.code === "Space" && !["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(document.activeElement.tagName) && !$("#studioView").hidden) {
      event.preventDefault(); captureSet();
    }
  });
  window.addEventListener("beforeunload", () => {
    state.cameraStream?.getTracks().forEach((track) => track.stop());
    state.objectUrls.forEach((url) => URL.revokeObjectURL(url));
  });
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    navigator.serviceWorker.register("/service-worker.js").catch((error) => {
      console.warn("Offline app support could not be enabled.", error);
    });
  }
}
function newSession() {
  state.photos.forEach(forgetPhoto);
  state.photos = [];
  state.decorations = [];
  state.undoStack = []; state.redoStack = [];
  state.filter = "original"; state.brightness = 100; state.contrast = 100; state.saturation = 100;
  state.frameColor = null;
  state.footer = `${currentFrame().label} · ${new Date().getFullYear()}`;
  ui.filterSelect.value = state.filter; ui.brightness.value = 100; ui.contrast.value = 100; ui.saturation.value = 100;
  ui.brightnessValue.value = "100%"; ui.contrastValue.value = "100%"; ui.saturationValue.value = "100%";
  ui.footerInput.value = state.footer;
  ui.frameColor.value = currentFrame().background;
  state.filterTarget = "all";
  syncFilterTargetOptions();
  setWorkflowStep(1, { scroll: false });
  showView("studio"); renderEverything();
}
function init() {
  applySettings();
  const lastUsed = loadJSON("lm-last-used", null);
  if (lastUsed?.frameId && FRAME_CATALOG.some((frame) => frame.id === lastUsed.frameId)) state.frameId = lastUsed.frameId;
  if (lastUsed?.photoCount && [2, 3, 4, 5, 6].includes(lastUsed.photoCount)) {
    state.photoCount = lastUsed.photoCount; ui.photoCount.value = String(state.photoCount);
  }
  if (lastUsed?.filter && FILTERS[lastUsed.filter] !== undefined) {
    state.filter = lastUsed.filter; ui.filterSelect.value = state.filter;
  }
  const savedCameraFilter = loadJSON("lm-camera-filter", "original");
  if (FILTERS[savedCameraFilter] !== undefined) {
    state.cameraFilter = savedCameraFilter;
    ui.cameraFilter.value = savedCameraFilter;
  }
  state.footer = ui.footerInput.value;
  ui.frameColor.value = currentFrame().background;
  setWorkflowStep(1, { scroll: false });
  drawFrameGallery();
  renderEverything();
  bindEvents();
  updateCameraFilter();
  loadSessions();
  if (navigator.mediaDevices?.addEventListener) navigator.mediaDevices.addEventListener("devicechange", refreshCameraList);
}
init();
