import {
    Bold,
    Italic,
    Essentials,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Link,
    List,
    Paragraph,
} from 'ckeditor5';

import {
    type PluginConfig,
    type Preset,
    setPluginConfig,
    StrapiMediaLib,
    StrapiUploadAdapter,
} from '@_sh/strapi-plugin-ckeditor';

const customPreset: Preset = {
    name: 'Minimal HTML',
    description: 'Just the basics needed for Helios',
    editorConfig: {
        licenseKey: 'GPL',
        plugins: [
            Bold,
            Italic,
            Essentials,
            Heading,
            Image,
            ImageCaption,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            Link,
            List,
            Paragraph,
            StrapiMediaLib,
            StrapiUploadAdapter,
        ],
        toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'strapiMediaLib',
            '|',
            'undo',
            'redo',
        ],
    },
};

const myConfig: PluginConfig = {
    /**
     * Note that since provided `presets` includes only `customPreset`
     * this configuration will overwrite default presets.
     */
    presets: [customPreset],
};

export default {
    register() {
        setPluginConfig(myConfig);
    },
};