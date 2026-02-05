---
publish: false
tag:
 - wards
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
---
Description.
## Locations
>[!infobox|wikipedia right clean]
>### Shops & Merchants
>```dataview
>TABLE WITHOUT ID file.link AS "Name", type AS "Type"
>FROM "5. Sigil/5.3 Shops & Merchants"
>WHERE location = this.name
>```
### Location

### Location