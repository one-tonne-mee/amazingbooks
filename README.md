# amazingbooks is obviously...=NOT= modelled after a certain Seattle-based company.

## How to run

### Pre-requisities

Node > 6.3.0

Npm or Yarn

### Clone this repo 

    git clone https://github.com/imagdalene/amazingbooks.git && cd amazingbooks
    
### Install stuff
    
    npm install
    
### Run dev server
    
    npm start
    
### Build

You may also wish to run the build, but this is purely a development P.O.C / P.O.V. 
 
     npm run build
     
### Visit my artifact

blessedipsum.com

### Infrastructure Notes

Statically-served insecure (http, no auth) production build is served up by AWS S3,
and dished up globally by AWS Cloudfront CDNs. AWS Route 53 points the way to the static site.
