import { RequestHandler, Request } from 'express';

/**
 * @desc    Get all bootcamps
 * @route   GET /api/v1/bootcamps
 * @access  Public
 */
export const getBootcamps: RequestHandler = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Show all bootcamps',
    });
};

/**
 * @desc    Get a single bootcamp
 * @route   GET /api/v1/bootcamps/:id
 * @access  Public
 */
export const getBootcamp: RequestHandler<{ id: string }> = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Get bootcamp ${req.params.id}`,
    });
};

/**
 * @desc    Create new bootcamp
 * @route   POST /api/v1/bootcamps
 * @access  Public
 */
export const createBootcamp: RequestHandler = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Create new bootcamp`,
    });
};

/**
 * @desc    Update bootcamp
 * @route   PUT /api/v1/bootcamps/:id
 * @access  Public
 */
export const updateBootcamp: RequestHandler<{ id: string }> = (
    req,
    res,
    next
) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`,
    });
};

/**
 * @desc    Delete bootcamp
 * @route   DELETE /api/v1/bootcamps/:id
 * @access  Public
 */
export const deleteBootcamp: RequestHandler<{ id: string }> = (
    req,
    res,
    next
) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`,
    });
};
