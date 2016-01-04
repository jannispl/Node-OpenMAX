export enum OMX_COMMANDTYPE {
  OMX_CommandStateSet = 0x0,
  OMX_CommandFlush = 0x1,
  OMX_CommandPortDisable = 0x2,
  OMX_CommandPortEnable = 0x3,
  OMX_CommandMarkBuffer = 0x4,
  OMX_CommandKhronosExtensions = 0x6F000000,
  OMX_CommandVendorStartUnused = 0x7F000000,
  OMX_CommandMax = 0x7FFFFFFF
}
export enum OMX_STATETYPE {
  OMX_StateInvalid = 0x0,
  OMX_StateLoaded = 0x1,
  OMX_StateIdle = 0x2,
  OMX_StateExecuting = 0x3,
  OMX_StatePause = 0x4,
  OMX_StateWaitForResources = 0x5,
  OMX_StateKhronosExtensions = 0x6F000000,
  OMX_StateVendorStartUnused = 0x7F000000,
  OMX_StateMax = 0x7FFFFFFF
}
export enum OMX_ERRORTYPE {
  OMX_ErrorNone = 0x0,
  OMX_ErrorInsufficientResources = 0x7FFFFFFF,
  OMX_ErrorUndefined = 0x80001000,
  OMX_ErrorInvalidComponentName = 0x80001001,
  OMX_ErrorComponentNotFound = 0x80001002,
  OMX_ErrorInvalidComponent = 0x80001003,
  OMX_ErrorBadParameter = 0x80001004,
  OMX_ErrorNotImplemented = 0x80001005,
  OMX_ErrorUnderflow = 0x80001006,
  OMX_ErrorOverflow = 0x80001007,
  OMX_ErrorHardware = 0x80001008,
  OMX_ErrorInvalidState = 0x80001009,
  OMX_ErrorStreamCorrupt = 0x8000100A,
  OMX_ErrorPortsNotCompatible = 0x8000100B,
  OMX_ErrorResourcesLost = 0x8000100C,
  OMX_ErrorNoMore = 0x8000100D,
  OMX_ErrorVersionMismatch = 0x8000100E,
  OMX_ErrorNotReady = 0x8000100F,
  OMX_ErrorTimeout = 0x80001010,
  OMX_ErrorSameState = 0x80001011,
  OMX_ErrorResourcesPreempted = 0x80001012,
  OMX_ErrorPortUnresponsiveDuringAllocation = 0x80001013,
  OMX_ErrorPortUnresponsiveDuringDeallocation = 0x80001014,
  OMX_ErrorPortUnresponsiveDuringStop = 0x80001015,
  OMX_ErrorIncorrectStateTransition = 0x80001016,
  OMX_ErrorIncorrectStateOperation = 0x80001017,
  OMX_ErrorUnsupportedSetting = 0x80001018,
  OMX_ErrorUnsupportedIndex = 0x80001019,
  OMX_ErrorBadPortIndex = 0x8000101A,
  OMX_ErrorPortUnpopulated = 0x8000101B,
  OMX_ErrorComponentSuspended = 0x8000101C,
  OMX_ErrorDynamicResourcesUnavailable = 0x8000101D,
  OMX_ErrorMbErrorsInFrame = 0x8000101E,
  OMX_ErrorFormatNotDetected = 0x8000101F,
  OMX_ErrorContentPipeOpenFailed = 0x80001020,
  OMX_ErrorContentPipeCreationFailed = 0x80001021,
  OMX_ErrorSeperateTablesUsed = 0x80001022,
  OMX_ErrorTunnelingUnsupported = 0x80001023,
  OMX_ErrorKhronosExtensions = 0x80001024,
  OMX_ErrorVendorStartUnused = 0x8F000000,
  OMX_ErrorMax = 0x90000000
}
export enum OMX_EXTRADATATYPE {
  OMX_ExtraDataNone = 0x0,
  OMX_ExtraDataQuantization = 0x1,
  OMX_ExtraDataKhronosExtensions = 0x6F000000,
  OMX_ExtraDataVendorStartUnused = 0x7F000000,
  OMX_ExtraDataMax = 0x7FFFFFFF
}
export enum OMX_EVENTTYPE {
  OMX_EventCmdComplete = 0x0,
  OMX_EventError = 0x1,
  OMX_EventMark = 0x2,
  OMX_EventPortSettingsChanged = 0x3,
  OMX_EventBufferFlag = 0x4,
  OMX_EventResourcesAcquired = 0x5,
  OMX_EventComponentResumed = 0x6,
  OMX_EventDynamicResourcesAvailable = 0x7,
  OMX_EventPortFormatDetected = 0x8,
  OMX_EventKhronosExtensions = 0x6F000000,
  OMX_EventVendorStartUnused = 0x7F000000,
  OMX_EventMax = 0x7FFFFFFF
}
export enum OMX_BUFFERSUPPLIERTYPE {
  OMX_BufferSupplyUnspecified = 0x0,
  OMX_BufferSupplyInput = 0x1,
  OMX_BufferSupplyOutput = 0x2,
  OMX_BufferSupplyKhronosExtensions = 0x6F000000,
  OMX_BufferSupplyVendorStartUnused = 0x7F000000,
  OMX_BufferSupplyMax = 0x7FFFFFFF
}