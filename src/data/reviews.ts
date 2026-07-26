/**
 * Customer reviews.
 *
 * This array is deliberately empty. The section on the page renders only when
 * there is something real in it — an invented testimonial on a site selling
 * carpets at these prices is worse than no testimonial at all, and it is the
 * kind of thing a buyer checks.
 *
 * To add one, paste the text as the customer actually wrote it:
 *
 *   export const REVIEWS: Review[] = [
 *     {
 *       name: "Дилшод А.",
 *       context: "Ташкент, гостиная 40 м²",
 *       text: "Приехали смотреть один ковёр, а увезли другой...",
 *     },
 *   ];
 *
 * `context` is optional — a city, a room, a project. It makes a review read
 * as real, because generic praise reads as bought.
 */

export interface Review {
  name: string;
  context?: string;
  text: string;
}

export const REVIEWS: Review[] = [];
