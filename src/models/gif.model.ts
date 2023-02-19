export interface GifResponse {
    data: GifData[];
    pagination: GifPagination;
    meta: Meta;
}

// Response interfaces

interface Meta {
    status: number;
    msg: string;
    response_id: string;
}

interface GifPagination {
    total_count: number;
    count: number;
    offset: number;
}

export interface GifData {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: Images;
    user?: User;
    analytics_response_payload: string;
    analytics: Analytics;
}

// Gif interfaces

interface Analytics {
    onload: EventURL;
    onclick: EventURL;
    onsent: EventURL;
}

interface EventURL {
    url: string;
}

interface User {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
}

interface Images {
    original: Original;
    downsized: Downsized;
    downsized_large: Downsized;
    downsized_medium: Downsized;
    downsized_small: Downsizedsmall;
    downsized_still: Downsized;
    fixed_height: Fixedheight;
    fixed_height_downsampled: Fixedheightdownsampled;
    fixed_height_small: Fixedheight;
    fixed_height_small_still: Downsized;
    fixed_height_still: Downsized;
    fixed_width: Fixedheight;
    fixed_width_downsampled: Fixedheightdownsampled;
    fixed_width_small: Fixedheight;
    fixed_width_small_still: Downsized;
    fixed_width_still: Downsized;
    looping: Looping;
    original_still: Downsized;
    original_mp4: Downsizedsmall;
    preview: Downsizedsmall;
    preview_gif: Downsized;
    preview_webp: Downsized;
    hd?: Downsizedsmall;
    '480w_still': Downsized;
    '4k'?: Downsizedsmall;
}

interface Looping {
    mp4_size: string;
    mp4: string;
}

interface Fixedheightdownsampled {
    height: string;
    width: string;
    size: string;
    url: string;
    webp_size: string;
    webp: string;
}

interface Fixedheight {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
}

interface Downsizedsmall {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
}

interface Downsized {
    height: string;
    width: string;
    size: string;
    url: string;
}

interface Original {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
    frames: string;
    hash: string;
}
