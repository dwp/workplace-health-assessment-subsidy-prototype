# phoenix-service

Prototype version control
1. Copy previous version folder (e.g. v17) and paste into parent folder (e.g. /app/views/phoenix/employer)
2. Move previous version under the appropriate accordion component in the relevant html page e.g. index-eui-pp.html for Employer UI Public Beta
3. Rename heading to new version, update the change log if needed and update the href so it links to the new version
4. Go into routes.js and copy routes (including the comment) under the previous version of the relevant phase e.g. pilot (or private beta) / post-pilot (or public beta) (e.g. copy ////////// EMPLOYER VERSION 17 (post-pilot))
5. Paste below that previous version’s section, rename to e.g. //////////            EMPLOYER VERSION 20 (public beta) and update the router links to the new version (e.g. '/phoenix/employer/v17/location’ to '/phoenix/employer/v20/location’) and so forth
6.   Right click on new folder (e.g. v20) > ‘Find in folder’ and search the previous version (e.g. v17) in that folder incase there are hard-coded links, then update these to the latest version (e.g. v20)