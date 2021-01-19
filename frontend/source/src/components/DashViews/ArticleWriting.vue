<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap>
            <v-flex md12 sm12 md10 lg10>
                <material-card :color="$store.state.app.color" title="Cikk létrehozása" text="--- cikk ---">
                    <div class="pt-2 pb-2">
                        <v-form ref="form" v-model="valid">
                            <span class="stepNumber" :class="$store.state.app.color"> 1. </span>
                            <span> Kategória kiválasztása: </span>
                            <v-flex xs12 md6 class="pl-0 pr-0">
                                <v-select :items="items" label="Outlined style" outlined></v-select>
                                <span> Alkategória kiválasztása: </span>
                                <v-select :items="items" label="Outlined style" outlined></v-select>
                            </v-flex>

                            <span class="stepNumber" :class="$store.state.app.color"> 2. </span>
                            <span> Alcím: </span>
                            <v-flex xs12 md6 class="pl-0 pr-0">
                                <v-textarea label="Alcím" outlined no-resize/>
                            </v-flex>
                            <span class="stepNumber" :class="$store.state.app.color"> 3. </span>
                            <span> Cikk: </span>
                            <v-tooltip right :color="$store.state.app.color" content-class="white--text">
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    v-bind="attrs"
                                  v-on="on"> mdi-information
                              </v-icon>
                              </template>
                              <span>Részletesen a filmről (Story, Interjú részletek, Külföldi cikkekből érdekességek ...)</span>
                            </v-tooltip>
                            <v-flex xs12 md12 class="pl-0 pr-0 pt-0 pb-0">
                                <TinyMCE type="story" id="d1" height="500" description="Képek feltöltése engedélyezett. Figyelj oda a beállításokra és használd az előnézetet!">
                                </TinyMCE>
                            </v-flex>
                            <span class="stepNumber" :class="$store.state.app.color"> 4. </span>
                            <span> A jó ...: </span>
                            <v-flex xs12 md12 class="pl-0 pr-0">
                                <v-textarea label="Alcím" outlined no-resize/>
                            </v-flex>
                            <span class="stepNumber" :class="$store.state.app.color"> 5. </span>
                            <span> ... A rossz ...: </span>
                            <v-flex xs12 md12 class="pl-0 pr-0">
                                <v-textarea label="Alcím" outlined no-resize/>
                            </v-flex>
                            <span class="stepNumber" :class="$store.state.app.color"> 6. </span>
                            <span> ... és az Összegzés: </span>
                            <v-flex xs12 md12 class="pl-0 pr-0">
                                <v-textarea label="Alcím" outlined no-resize/>
                            </v-flex>
                            <span class="stepNumber" :class="$store.state.app.color"> 7. </span>
                            <span> Kereső optimalizálás: </span>
                            <v-flex xs12 md12 class="pl-0 pr-0">
                                <v-text-field class="purple-input" label="User Name" outlined />
                            </v-flex>
                            {{valid}}
                        </v-form>
                        {{ $store.state.app.color }}
                    </div>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import TinyMCE from '@/components/Article/TinyMCE'

export default {
    components: {
        TinyMCE,
    },
    data() {
        return {
            valid: false,
            movie: {
                originalTitle: '',
                releaseDate: '',
                officialHomepage: '',
                runtime: '',
                genres: [],
            },
            selectedFile: null,
            image: '',
            images: [],
            theMovieDb: {},
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    },
    methods: {
        kebabToSnake(str) {
            let string = '';
            let chart = '';
            for (let i = 0; i < str.length; i++) {
                string = string + str.charAt(i)
                    .replace(',', ', ')
            }
            return string;
        },
    },
    watch: {
        movie: {
            handler(val) {
                console.log('movie object', val)
                return val;
            },
            deep: true
        },
    },
};
</script>
<style lang='scss'>
.stepNumber {
    display: inline-block;
    width: 1.75rem;
    height: 1.75rem;
    margin-right: .5rem;
    line-height: 1.7rem;
    color: #fff;
    text-align: center;
    border-radius: 50%;
}

.step {
    display: inline-block;
    width: 1.75rem;
    height: 1.75rem;
    margin-right: .5rem;
    line-height: 1.7rem;
    color: #fff;
    text-align: center;
    background: grey;
    border-radius: 50%;
}

.active {
    background: linear-gradient(60deg, #66bb6a, #43a047);
}

.upload-image {
    position: absolute;
    left: 45px;
    top: 62px;
}

label~.upload-image {
    visibility: hidden;


}


label:hover~.upload-image {
    visibility: visible;

}


[type="file"] {
    height: 0;
    overflow: hidden;
    width: 0;
}

[type="file"]+label {
    background: #f15d22;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-size: inherit;
    font-weight: 600;
    margin-bottom: 1rem;
    outline: none;
    padding: 1rem 50px;
    position: relative;
    transition: all 0.3s;
    vertical-align: middle;



    &:hover {
        background-color: darken(#f15d22, 10%);
    }

    &.btn-2 {
        background-color: #99c793;
        border-radius: 50px;
        overflow: hidden;

        &:hover {
            background-color: darken(#99c793, 30%);
        }
    }
}
</style>