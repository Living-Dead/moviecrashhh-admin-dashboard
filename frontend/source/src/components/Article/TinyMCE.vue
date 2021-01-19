<template>
    <div>
        <p class="text-center" v-html="description"></p>
        <tinymce :id="id" v-model="movie[type]" :other_options="options"></tinymce>
        <input name="image" type="file" :id="id + '_upload'" style="visibility: hidden">
        <v-text-field style="visibility: hidden"  v-model="movie[type]" :rules="[v => !!v || 'A mező kitöltése kötelező']" required></v-text-field>

    </div>
</template>
<style lang='scss' scoped>
figure.image {
    width: 100%;
    display: inline-block;
    background: black;
    text-align: center;
    height: 400px;
}

figure.image figcaption {
    display: none !important;
}

.small-image {
    width: 100% !important;
    height: 400px !important;
    object-fit: contain;
}

.large-image {
    width: 100% !important;
    height: 400px !important;
    object-fit: cover;
}
</style>

<script>
import $ from 'jquery'

import tinymce from 'vue-tinymce-editor';

export default {
    name: 'TinyMCE',
    components: {
        tinymce,
    },
    props: {
        type: String,
        text: String,
        description: String,
        id: String,
        height: String,
    },
    data() {
        return {
            valid: false,
            movie: {},
            options: {
                language_url: `https://cdn.jsdelivr.net/npm/tinymce-lang/langs/hu_HU.js`,
                height: parseInt(this.height),
                menubar: false,
                link_class_list: [{
                    title: 'None',
                    value: 'article-link'
                }, ],
                paste_data_images: true,
                plugins: [
                    'link image anchor pagebreak',
                    'searchreplace wordcount fullscreen',
                    'paste textpattern',
                    'imagetools',
                ],
                toolbar1: "insertfile undo redo | bold italic | link image | blockquote | styleselect",
                style_formats: [
                    { title: 'Szerző', inline: 'cite' },
                ],
                image_advtab: true,
                image_description: true,
                image_title: true,
                image_caption: true,
                file_picker_callback: function(callback, value, meta) {
                    console.log('image', this.id)
                    let idParam = '#' + this.id + '_upload';
                    if (meta.filetype === 'image') {
                        $(idParam).trigger('click');
                        $(idParam).on('change', function() {
                            var file = this.files[0];
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                callback(e.target.result, {
                                    alt: ''
                                });
                            };
                            reader.readAsDataURL(file);
                        });
                    }
                },
                image_class_list: [
                    { title: 'large-image', value: 'large-image' },
                    { title: 'small-image', value: 'small-image' },
                ],
            },
        }
    },
    watch: {
        movie: {
            handler(nv) {
                console.log('nv', nv)
            },
            deep: true,
        },
    },
};
</script>