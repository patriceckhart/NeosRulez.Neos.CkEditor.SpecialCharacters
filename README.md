# Special characters and emojis for Neos CMS CKEditor

A Neos CMS plugin that allows inserting special characters and emojis in CKEditor.

![MonacoEditor](https://raw.githubusercontent.com/patriceckhart/NeosRulez.Neos.CkEditor.SpecialCharacters/master/Preview.png)

## Installation

The NeosRulez.Neos.CkEditor.SpecialCharacters package is listed on packagist (https://packagist.org/packages/neosrulez/neos-ckeditor-specialcharacters) - therefore you don't have to include the package in your "repositories" entry any more.

Just run:

```
composer require neosrulez/neos-ckeditor-specialcharacters
```

## Usage

```yaml
'Neos.NodeTypes:Text':
  properties:
    text:
      ui:
        inline:
          editorOptions:
            specialCharacters: true # enable special characters
            emojis: true # enable emojis
```

## Author

* E-Mail: mail@patriceckhart.com
* URL: http://www.patriceckhart.com 
