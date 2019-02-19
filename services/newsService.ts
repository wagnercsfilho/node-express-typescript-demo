import NewsRepository from "../repository/newsRepository";
import { DocumentQuery } from "mongoose";

class NewsService {
  get() {
    return NewsRepository.find({});
  }

  getById(_id: String) {
    return NewsRepository.findById(_id);
  }

  create(news) {
    return NewsRepository.create(news);
  }

  update(_id, news) {
    return NewsRepository.findByIdAndUpdate(_id, news);
  }

  delete(_id) {
    return NewsRepository.findByIdAndRemove(_id);
  }
}

export default new NewsService();
