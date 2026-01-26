export type Category =
    | "All"
    | "Free"
    | "Premium";

export const CATEGORIES: Category[] = [
    "All",
    "Free",
    "Premium"
];

export interface Sound {
    id: string;
    name: string;
    category: Category;
    path: string;
    icon: string;
    isPremium: boolean;
    duration?: string;
}

// Map folders to sounds. 
export const SOUNDS: Sound[] = [
    // FREE Category
    { id: "cave_droplet", name: "Cave Droplet", category: "Free", path: "/sounds/Free/Cave Droplet.mp3", icon: "Droplet", isPremium: false },
    { id: "cozy_rain", name: "Cozy Rain", category: "Free", path: "/sounds/Free/Cozy Rain.mp3", icon: "CloudRain", isPremium: false },
    { id: "crackling_fire", name: "Crackling Fire", category: "Free", path: "/sounds/Free/Crackling fire.mp3", icon: "Flame", isPremium: false },
    { id: "deep_ocean", name: "Deep Ocean", category: "Free", path: "/sounds/Free/Deep Ocean.mp3", icon: "Waves", isPremium: false },


    { id: "field_insects", name: "Field Insects", category: "Free", path: "/sounds/Free/Field Insects.mp3", icon: "Bug", isPremium: false },
    { id: "forest_rain", name: "Forest Rain", category: "Free", path: "/sounds/Free/Forest Rain.mp3", icon: "TreeDeciduous", isPremium: false },

    { id: "morning_birds", name: "Morning Birds", category: "Free", path: "/sounds/Free/Morning Birds.mp3", icon: "Bird", isPremium: false },

    { id: "night_forest", name: "Night Forest", category: "Free", path: "/sounds/Free/Night Forest.mp3", icon: "Moon", isPremium: false },
    { id: "ocean_waves", name: "Ocean Waves", category: "Free", path: "/sounds/Free/Ocean Waves.mp3", icon: "Ship", isPremium: false },
    { id: "running_water", name: "Running Water", category: "Free", path: "/sounds/Free/Running Water.mp3", icon: "Droplets", isPremium: false },
    { id: "shakuhachi", name: "Shakuhachi Chorus", category: "Free", path: "/sounds/Free/Shakuhachi Chorus.mp3", icon: "Wind", isPremium: false },
    { id: "singing_bowl", name: "Singing Bowl", category: "Free", path: "/sounds/Free/Singing Bowl.mp3", icon: "Disc", isPremium: false },
    { id: "snow_falling", name: "Snow Falling", category: "Free", path: "/sounds/Free/Snow Falling.mp3", icon: "Snowflake", isPremium: false },
    { id: "space", name: "Space", category: "Free", path: "/sounds/Free/Space.mp3", icon: "Orbit", isPremium: false },
    { id: "thunder", name: "Thunder", category: "Free", path: "/sounds/Free/Thunder.mp3", icon: "Thunder", isPremium: false },
    { id: "train", name: "Train", category: "Free", path: "/sounds/Free/Train.mp3", icon: "Train", isPremium: false },
    { id: "umbrella_rain", name: "Umbrella Rain", category: "Free", path: "/sounds/Free/Umbrella Rain.mp3", icon: "Umbrella", isPremium: false },
    { id: "water_drip", name: "Water Drip", category: "Free", path: "/sounds/Free/Water Drip.mp3", icon: "GlassWater", isPremium: false },
    { id: "wind_blowing", name: "Wind Blowing", category: "Free", path: "/sounds/Free/Wind Blowing.mp3", icon: "Tornado", isPremium: false },
    { id: "winter_wind", name: "Winter Wind", category: "Free", path: "/sounds/Free/Winter Wind.mp3", icon: "ThermometerSnowflake", isPremium: false },

    // PREMIUM Category
    // Relaxing Collection (Popular)
    { id: "relaxing", name: "Relaxing Lofi", category: "Premium", path: "/sounds/Premium/Relaxing Lofi.mp3", icon: "Smile", isPremium: true },
    { id: "relaxing_piano", name: "Relaxing Piano", category: "Premium", path: "/sounds/Premium/Relaxing Piano.mp3", icon: "Piano", isPremium: true },
    { id: "relaxing_sleep", name: "Relaxing Sleep", category: "Premium", path: "/sounds/Premium/Relaxing Sleep.mp3", icon: "Star", isPremium: true },
    { id: "relax_beat", name: "Relax Beat", category: "Premium", path: "/sounds/Premium/Relax Beat.mp3", icon: "Headphones", isPremium: true },
    { id: "relax_ocean", name: "Relax Ocean", category: "Premium", path: "/sounds/Premium/Relax Ocean.mp3", icon: "Sunset", isPremium: true },

    // Zen Collection
    { id: "zen_buddhist", name: "Zen Buddhist", category: "Premium", path: "/sounds/Premium/Zen Buddhist.mp3", icon: "Mountain", isPremium: true },
    { id: "zen_garden", name: "Zen Garden", category: "Premium", path: "/sounds/Premium/Zen Garden.mp3", icon: "Flower2", isPremium: true },
    { id: "zen_meditation", name: "Zen Meditation", category: "Premium", path: "/sounds/Premium/Zen Meditation.mp3", icon: "Orbit", isPremium: true },
    { id: "zen_river", name: "Zen River", category: "Premium", path: "/sounds/Premium/Zen River.mp3", icon: "Anchor", isPremium: true },
    { id: "zen_yoga", name: "Zen Yoga", category: "Premium", path: "/sounds/Premium/Zen Yoga.mp3", icon: "Activity", isPremium: true },
    { id: "koto_zen", name: "Koto Zen", category: "Premium", path: "/sounds/Premium/Koto Zen.mp3", icon: "Music2", isPremium: true },

    // Ambient & Nature
    { id: "baltic_shoreline", name: "Baltic Shoreline", category: "Premium", path: "/sounds/Premium/Baltic Shoreline.mp3", icon: "Compass", isPremium: true },
    { id: "blue_piano", name: "Blue Piano", category: "Premium", path: "/sounds/Premium/Blue Piano.mp3", icon: "Piano", isPremium: true },
    { id: "dark_rain", name: "Dark Rain", category: "Premium", path: "/sounds/Premium/Dark Rain.mp3", icon: "CloudRain", isPremium: true },
    { id: "deep_sleep", name: "Deep Sleep", category: "Premium", path: "/sounds/Premium/Deep Sleep.mp3", icon: "Moon", isPremium: true },
    { id: "focus", name: "Focus", category: "Premium", path: "/sounds/Premium/Focus.mp3", icon: "Brain", isPremium: true },
    { id: "forest_ambience", name: "Forest Ambience", category: "Premium", path: "/sounds/Premium/Forest Ambience.mp3", icon: "Tent", isPremium: true },
    { id: "meditation", name: "Meditation", category: "Premium", path: "/sounds/Premium/Meditation.mp3", icon: "Sparkles", isPremium: true },
    { id: "mystical_music", name: "Mystical Music", category: "Premium", path: "/sounds/Premium/Mystical Music.mp3", icon: "Ghost", isPremium: true },
    { id: "sakura", name: "Sakura", category: "Premium", path: "/sounds/Premium/Sakura.mp3", icon: "Cherry", isPremium: true },
    { id: "wind_chimes", name: "Wind Chimes", category: "Premium", path: "/sounds/Premium/Wind Chimes.mp3", icon: "BellRing", isPremium: true },
];
