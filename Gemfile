source 'https://rubygems.org'

gem 'jekyll', '~> 4.3.2'
gem 'csv' # Add this to resolve CSV warning
gem 'logger' # Add this to resolve logger warning
gem 'base64' # Add this to resolve base64 warning

group :jekyll_plugins do
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem 'jekyll-paginate'
end

# Windows and JRuby Compatibility
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Only install wdm if on Windows and compilation succeeds
group :development do
  gem 'wdm', '>= 0.1.0', platforms: [:mingw, :mswin, :x64_mingw] if Gem.win_platform?
end
