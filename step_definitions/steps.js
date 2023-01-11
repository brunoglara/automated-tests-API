const { I } = inject();

const Joi = require('joi');

let endpoint

Given('I want to list business by location {string}', (city) => {
  endpoint = `/businesses/search?location=${city}`
});

When('I do a get request', () => {
  I.sendGetRequest(endpoint)
});

Then('I should get a list of business from searched location', () => {
  I.seeResponseCodeIs(200);

  const businessSchema = Joi.object(
    {
      businesses: Joi.array().items(Joi.object(
        {
          id: Joi.string()
            .required(),
          alias: Joi.string(),
          name: Joi.string(),
          image_url: Joi.string(),
          is_closed: Joi.boolean(),
          url: Joi.string(),
          review_count: Joi.number(),
          categories: Joi.array().items(Joi.object(
            {
              alias: Joi.string(),
              title: Joi.string()
            }
          )),
          rating: Joi.number(),
          coordinates: Joi.object(
            {
              latitude: Joi.number(),
              longitude: Joi.number()
            }
          ),
          transactions: Joi.array().items(Joi.string()),
          price: Joi.string(),
          location: Joi.object(
            {
              address1: Joi.string().allow('').allow(null),
              address2: Joi.string().allow('').allow(null),
              address3: Joi.string().allow('').allow(null),
              city: Joi.string(),
              zip_code: Joi.string().allow('').allow(null),
              country: Joi.string(),
              state: Joi.string(),
              display_address: Joi.array().items(Joi.string()),
            }),
          phone: Joi.string().allow('').allow(null),
          display_phone: Joi.string().allow('').allow(null),
          distance: Joi.number()
        }
      )),
      total: Joi.number(),
      region: Joi.object(
        {
          center: Joi.object(
            {
              longitude: Joi.number(),
              latitude: Joi.number()
            }
          )
        })
    }
  )

  I.seeResponseMatchesJsonSchema(businessSchema)

});


// -------------------------------------------------------------
Given('I want get a business by {string}', (id) => {

  endpoint = `/businesses/${id}`
});

When('I do a get request by id', () => {

  I.sendGetRequest(endpoint)
});

Then('I should get a business by searched id', () => {
  I.seeResponseCodeIs(200);

  const businessIdSchema = Joi.object(
    {
      id: Joi.string().required(),
      alias: Joi.string(),
      name: Joi.string(),
      image_url: Joi.string(),
      is_claimed: Joi.boolean(),
      is_closed: Joi.boolean(),
      url: Joi.string(),
      phone: Joi.string().allow('').allow(null),
      display_phone: Joi.string().allow('').allow(null),
      review_count: Joi.number(),
      categories: Joi.array().items(Joi.object(
        {
          alias: Joi.string(),
          title: Joi.string()
        },
        {
          alias: Joi.string(),
          title: Joi.string()
        }
      )),
      rating: Joi.number(),
      location: Joi.object(
        {
          address1: Joi.string(),
          address2: Joi.string().allow('').allow(null),
          address3: Joi.string().allow('').allow(null),
          city: Joi.string(),
          zip_code: Joi.string(),
          country: Joi.string(),
          state: Joi.string(),
          display_address: Joi.array().items(Joi.string()),
          cross_streets: Joi.string().allow('').allow(null)
        }
      ),
      coordinates: Joi.object(
        {
          latitude: Joi.number(),
          longitude: Joi.number()
        }
      ),
      photos: Joi.array().items(Joi.string()),
      price: Joi.string(),
      hours: Joi.array().items(Joi.object(
        {
          open: Joi.array().items(Joi.object(
            {
              is_overnight: Joi.boolean(),
              start: Joi.string(),
              end: Joi.string(),
              day: Joi.number()
            }
          )),
          hours_type: Joi.string(),
          is_open_now: Joi.boolean()
        }
      )),
      transactions: Joi.array(),
      messaging: Joi.object(
        {
          url: Joi.string(),
          use_case_text: Joi.string(),
        },
      )
    }
  )

  I.seeResponseMatchesJsonSchema(businessIdSchema);
});

// ------------------------------------------------------------
Given('I want get reviews by business id = {string}', (businessId) => {
  endpoint = `/businesses/${businessId}/reviews`
});

When('I do a get request by business id', () => {
  I.sendGetRequest(endpoint)
});

Then('I should get reviews by searched business id', () => {
  I.seeResponseCodeIs(200);

  const patternDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/

  const reviewsSchema = Joi.object(
    {
      reviews: Joi.array().items(Joi.object(
        {
          id: Joi.string().required(),
          url: Joi.string(),
          text: Joi.string().allow('').allow(null),
          rating: Joi.number(),
          time_created: Joi.string().regex(patternDate).required(),
          user: Joi.object({
            id: Joi.string().required(),
            profile_url: Joi.string(),
            image_url: Joi.string().allow('').allow(null),
            name: Joi.string()
          }
          )
        }
      )),
      total: Joi.number(),
      possible_languages: Joi.array().items(Joi.string())
    }
  )

  I.seeResponseMatchesJsonSchema(reviewsSchema);
});

