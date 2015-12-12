#pragma once

#include <nan.h>

class TUNNEL : public Nan::ObjectWrap {
public:
  static NAN_MODULE_INIT(Init);

  TUNNEL_T tunnel;
private:
  explicit TUNNEL(COMPONENT* source, COMPONENT* sink);
  ~TUNNEL();

  static NAN_METHOD(New);
  static NAN_METHOD(enable);
  static NAN_METHOD(flush);
  static NAN_METHOD(disable);
  static NAN_METHOD(teardown);
  static Nan::Persistent<v8::Function> constructor;
};