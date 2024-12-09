import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Page d\'accueil',
  type: 'document',
  options: {
    singleton: true
  },
  fields: [
    defineField({
      name: 'titrePrincipal',
      type: 'string',
    }),
    defineField({
      name: 'sectionAccueil',
      type: 'object',
      fields: [
        {type: 'string', name: 'titrePrincipal'},
        {type: 'string', name: 'texteDescription'},
        {
          type: 'array',
          name: 'statistiques',
          title: 'Statistiques principales',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'statistique',
              fields: [
                {type: 'number', name: 'valeur'},
                {type: 'string', name: 'texteExplicatif'},
              ]
            })
          ]
        },
        defineField({
          name: 'boutonAction',
          type: 'object',
          fields: [
            {type: 'string', name: 'texteBouton'},
            {type: 'string', name: 'lienBouton'}
          ]
        })
      ]
    }),
    defineField({
      name: 'fonctionnalites',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'fonctionnalite',
          fields: [
            {type: 'string', name: 'titreFonctionnalite'},
            {type: 'text', name: 'description'},
            {
              type: 'image',
              name: 'icone',
              options: {
                hotspot: true
              }
            },
            {
              type: 'string',
              name: 'couleurFond',
              options: {
                list: [
                  {title: 'Violet', value: 'violet'},
                  {title: 'Bleu', value: 'bleu'},
                  {title: 'Orange', value: 'orange'}
                ]
              }
            }
          ]
        })
      ]
    }),
    defineField({
      name: 'processusUtilisation',
      type: 'object',
      fields: [
        {type: 'string', name: 'titreSectionProcessus'},
        defineField({
          name: 'etapes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                {type: 'string', name: 'titreEtape'},
                {type: 'text', name: 'descriptionEtape'},
                {type: 'image', name: 'iconeEtape'}
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'avantages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {type: 'string', name: 'titreAvantage'},
            {type: 'text', name: 'descriptionAvantage'},
            {
              type: 'array',
              name: 'points',
              of: [defineArrayMember({type: 'string'})]
            }
          ]
        })
      ]
    }),
    defineField({
      name: 'temoignages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {type: 'string', name: 'nomUtilisateur'},
            {type: 'string', name: 'roleUtilisateur'},
            {type: 'text', name: 'commentaire'},
            {type: 'number', name: 'note', validation: Rule => Rule.min(1).max(5)},
            {
              type: 'image',
              name: 'photoUtilisateur',
              options: {
                hotspot: true
              }
            }
          ]
        })
      ]
    }),
    defineField({
      name: 'tarification',
      type: 'object',
      fields: [
        {type: 'string', name: 'titreTarification'},
        defineField({
          name: 'formules',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                {type: 'string', name: 'nomFormule'},
                {type: 'number', name: 'prix'},
                {
                  type: 'string',
                  name: 'periodicite',
                  options: {
                    list: [
                      {title: 'Mensuel', value: 'mensuel'},
                      {title: 'Annuel', value: 'annuel'}
                    ]
                  }
                },
                {
                  type: 'array',
                  name: 'caracteristiques',
                  of: [defineArrayMember({type: 'string'})]
                },
                {type: 'string', name: 'texteBouton'}
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'questionsFrequentes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {type: 'string', name: 'question'},
            {type: 'text', name: 'reponse'}
          ]
        })
      ]
    }),
    defineField({
      name: 'appelAction',
      type: 'object',
      fields: [
        {type: 'string', name: 'titreAppel'},
        {type: 'text', name: 'descriptionAppel'},
        {type: 'string', name: 'texteBouton'},
        {type: 'string', name: 'lienBouton'}
      ]
    })
  ]
})