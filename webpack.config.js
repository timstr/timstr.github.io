const path = require("path");
const glob = require("glob");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const production_mode = process.env.NODE_ENV === "production";
console.log(
    `NOTE: building in ${production_mode ? "production" : "development"} mode`
);

const tsxSuffix = ".tsx";
const pagePaths = glob
    .sync("**/*" + tsxSuffix, {
        cwd: path.resolve(__dirname, "src/pages"),
        nomount: true,
    })
    .map((x) => x.substring(0, x.length - tsxSuffix.length));

// Entry is an object containing [pagename: "./pagename.tsx"] key-value pairs
const entry = pagePaths.reduce((r, s) => ((r[s] = `./pages/${s}.tsx`), r), {});

module.exports = {
    context: path.resolve(__dirname, "src/"),

    entry,
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist/"),
    },
    mode: production_mode ? "production" : "development",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
    },

    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: "../static",
                to: "static",
            },
        ]),
    ].concat(
        pagePaths.map(
            (pagename) =>
                new HtmlPlugin({
                    filename: `${pagename}.html`,
                    template: production_mode
                        ? "template_dist.html"
                        : "template_dev.html",
                    chunks: [pagename],
                })
        )
    ),
};
